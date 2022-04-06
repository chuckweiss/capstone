import { useState } from "react";

const OrderItem = ({ item, setAmount, profile }) => {
  const [value, setValue] = useState(
    profile[item.text] ? profile[item.text] - item.amount : 0
  );

  return (
    <div className="py-3">
      <h3 className="flex flex-row justify-evenly pb-1">{item.text}</h3>
      <div className="flex flex-row justify-between pb-1">
        Current Amount:
        <p>{item.amount}</p>
      </div>
      <div className="flex flex-row justify-between pb-1">
        Target Amount:
        <p>{profile[item.text] || "None"}</p>
      </div>

      <div className="">
        <label>To Order</label>
        <input
          className="shadow appearance-none 
          border rounded w-full py-2 px-3 text-gray-700 
          leading-tight focus:outline-none focus:shadow-outline 
          text-right"
          type="text"
          value={value}
          onChange={(e) => {
            setValue(parseInt(e.target.value));
            setAmount(parseInt(e.target.value));
          }}
        />
      </div>
    </div>
  );
};

export default OrderItem;
