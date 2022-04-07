import { useState } from "react";

const OrderProfileSelect = ({ orders, setProfile }) => {
  const [value, setValue] = useState("default");

  const findOrder = (orders, val) => {
    for (const order of orders) {
      if (order.time === parseInt(val)) return order;
    }
  };

  const orderToProfile = (order) => {
    const name = `Order of ${new Date(order.time).toLocaleDateString()}`;
    let profile = { name };
    for (const [item, amount] of order.orders) {
      profile[item] = amount;
    }
    return profile;
  };

  return (
    <>
      <select
        className="mb-3"
        value={value}
        onChange={(e) => {
          const val = e.target.value;
          if (val !== "default") {
            const order = findOrder(orders, val);
            const profile = orderToProfile(order);
            setProfile(profile);
          }
          setValue(e.target.value);
        }}
      >
        <option key={0} value={"default"}>
          Select Date to autofill
        </option>

        {orders.map((order, i) => {
          return (
            <option key={i + 1} value={order.time}>
              {new Date(order.time).toLocaleDateString()}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default OrderProfileSelect;
