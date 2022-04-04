const OrderItem = ({ item, orderAmounts, index, setAmount, profile }) => {
  return (
    <div className="py-3">
      <h3 className="flex flex-row justify-evenly pb-1">{item.text}</h3>
      <div className="flex flex-row justify-between pb-1">
        Current Amount:
        <p>{item.amount}</p>
      </div>
      <div className="flex flex-row justify-between pb-1">
        Target Amount:
        <p>{profile[item.text]}</p>
      </div>

      <div className="">
        <label>To Order</label>
        <input
          className="shadow appearance-none 
          border rounded w-full py-2 px-3 text-gray-700 
          leading-tight focus:outline-none focus:shadow-outline 
          text-right"
          type="text"
          value={profile[item.text] - item.amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
    </div>
  );
};

export default OrderItem;
