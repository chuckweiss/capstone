import Item from "./Item";
import EditAmount from "../editAmount/EditAmount";

const Items = ({ inventory, deleteItem, editItem }) => {
  return (
    <div className="rounded-sm px-12 py-4 m-2 w-80 shadow-2xl">
      {inventory.map((item, i) => (
        <Item
          key={i}
          item={item}
          deleteItem={deleteItem}
          editItem={editItem}
          element={<EditAmount editItem={editItem} item={item} />}
        />
      ))}
    </div>
  );
};

export default Items;
