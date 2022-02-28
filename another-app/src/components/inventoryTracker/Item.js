const Item = ({ item, deleteItem }) => {
  return (
    <div className="inventory__item" onDoubleClick={() => deleteItem(item.id)}>
      <h3>
        {item.text}
        <div>{item.amount}</div>
      </h3>
      <p>Last order date: {item.date}</p>
    </div>
  );
};

export default Item;
