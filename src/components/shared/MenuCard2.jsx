const MenuCard2 = ({item}) => {
  return (
    <div className="overflow-hidden shadow-md">
      <img src={item?.image} alt={item?.name} className="w-full h-48 object-cover brightness-75" />
      <div className="py-14 px-4 bg-white text-center">
        <h2 className="text-lg font-semibold">{item?.name}</h2>
        <p className="text-gray-600 text-sm">{item?.recipe}</p>
        <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-4 rounded">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default MenuCard2;
