import { loadStripe } from "@stripe/stripe-js";
import Header from "../../../../components/shared/Header";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFrom from "./CheckoutForm";

// TODO: to get the published key(PK),
// GO to stripe on google and sign in to your account and then on home page of the dashboard there will be a published key;
// Copy that and paste it in the .env.local file and then import it
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    return (
        <div className="mt-5">
            <Header subheader={"Payment"} header={"Hurry Up!"}></Header>
            <div className="my-5">
                <Elements stripe={stripePromise}>
                    <CheckoutFrom></CheckoutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;