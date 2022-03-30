const Item = ({ item, deleteItem }) => {
  return (
    <div className="py-3">
      <div onDoubleClick={() => deleteItem(item.id)}>
        <h3 className="flex flex-row justify-between pb-1">
          {item.text}
          <div>{item.amount}</div>
        </h3>
        <p className="flex flex-row justify-between">
          Last order date:
          <p>{item.date}</p>
        </p>
      </div>
      <p className="flex flex-row justify-between">
        <input id="orderInput" type="number" name="orderInput" placeholder="0"></input>
      </p>
    </div>
  );
};

export default Item;
