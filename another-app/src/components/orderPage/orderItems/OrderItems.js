import OrderItem from "./OrderItem";

const OrderItems = ({ inventory, profile, storeOrder }) => {
  let orderAmounts = inventory.map((item) => profile[item.text] - item.amount);

  const changeOrderAmount = (i, amount) => (orderAmounts[i] = amount);

  const onSubmit = (e) => {
    e.preventDefault();
    storeOrder(orderAmounts.map((amount, i) => [inventory[i].text, amount]));
  };

  return (
    <form
      className="rounded-sm px-12 py-4 m-2 w-80 
      shadow-2xl flex flex-col items-center"
      onSubmit={onSubmit}
    >
      {inventory.map((item, i) => (
        <OrderItem
          key={i}
          item={item}
          amount={orderAmounts[i]}
          setAmount={(amount) => changeOrderAmount(i, amount)}
          profile={profile}
        />
      ))}

      <input
        className="shadow rounded py-2 px-1 mt-4 
        text-gray-100 leading-tight focus:outline-none 
        focus:shadow-outline bg-green-900"
        type="submit"
        value="Place Order"
      />
    </form>
  );
};

export default OrderItems;
