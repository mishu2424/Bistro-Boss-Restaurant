const MenuCard = ({ item }) => {
  return (
    <div className="flex gap-3 text-start">
      <img style={{
        borderRadius:'0 200px 200px 200px'
      }} className="w-32" src={item?.image} alt={item?.name} />
      <div className="flex">
        <div>
          <h2 className="text-base font-bold">{item?.name}</h2>
          <p className="text-xs">{item?.recipe}</p>
        </div>
        <h2 className="text-base text-yellow-600">${item?.price}</h2>
      </div>
    </div>
  );
};

export default MenuCard;
