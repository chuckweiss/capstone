import Item from "./Item";

const Items = ({ inventory, deleteItem }) => {
  return (
    <>
      {inventory.map((item) => (
        <Item key={item.id} item={item} deleteItem={deleteItem} />
      ))}
    </>
  );
};

export default Items;
