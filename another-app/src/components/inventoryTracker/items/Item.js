const Item = ({ item, deleteItem, element }) => {
  return (
    <div className="py-3" onDoubleClick={() => deleteItem(item)}>
      <h3 className="flex flex-row justify-between pb-1">
        {item.text}
        <div>Amount: {item.amount}</div>
      </h3>
      <div className="flex flex-row justify-between">
        Last order date:
        <p>{item.date}</p>
      </div>
      <div className="pt-2">{element}</div>
    </div>
  );
};

export default Item;
