import Item from "./Item";

const Items = ({ inventory, deleteItem }) => {
  return (
    <>
      {inventory.map((item, i) => (
        <Item key={i} item={item} deleteItem={deleteItem} />
      ))}
    </>
  );
};

export default Items;
