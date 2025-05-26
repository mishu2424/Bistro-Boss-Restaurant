import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from "../../../../hooks/useCart";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import moment from "moment/moment";
import toast from "react-hot-toast";

const CheckoutFrom = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [carts] = useCart();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const [errorMessage, setErrorMessage] = useState(null);

  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      getClientSecret();
    }
  }, [axiosSecure, totalPrice]);

  const getClientSecret = async () => {
    const { data } = await axiosSecure.post("/create-payment-intent", {
      price: totalPrice,
    });
    setClientSecret(data.clientSecret);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setErrorMessage(error?.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setErrorMessage("");
    }

    // confirm payment
    const { paymentIntent, error: paymentIntentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "Anonymous",
            name: user?.displayName || "Anonymous",
          },
        },
      });
    if (paymentIntent) {
      console.log("intent", paymentIntent);
      setTransactionId(paymentIntent.id);
      if(paymentIntent.status==="succeeded"){
        // after payment has been successfully, save it to db and delete the bought products/items from the cart.
        const payment={
            email:user?.email,
            price:totalPrice,
            date:moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
            transactionId:paymentIntent.id,
            cartIds:carts.map(cart=>cart._id),
            menuIds:carts.map(cart=>cart.menuId),
            status:'Pending'
        }
        console.log(payment);
        const {data}=await axiosSecure.post('/payments',payment);
        if(data?.result?.insertedId && data?.deletedResult.deletedCount){
            toast.success('Payment has been successfully completed')
            console.log(data);
        }
      }
    } else {
      setErrorMessage(paymentIntentError.message);
    }
  };
  return (
    <div className="mx-5">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary mt-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        {/* Show error message to your customers */}
        {errorMessage && <span className="text-red-600">{errorMessage}</span>}
        {transactionId && (
          <span className="text-green-600">Transaction id: {transactionId}</span>
        )}
      </form>
    </div>
  );
};

export default CheckoutFrom;
