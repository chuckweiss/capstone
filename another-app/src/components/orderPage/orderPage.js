import { useState } from "react";
import Items from "./Items";
import AddButton from "./AddButton";
import AddItem from "./AddItem";

const OrderPage = ({ inventory, addItem, deleteItem, loading }) => {
  document.title = `Order Page`;

  const [showAdd, setShowAdd] = useState(false);

  return (
    <div className="flex flex-col items-center py-4">
      <h1 className="w-screen flex flex-row justify-evenly py-2">
        <div>Make An Order</div>
        <AddButton
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={() => setShowAdd(!showAdd)}
        />
      </h1>

      {showAdd && <AddItem onAdd={addItem} setShowAdd={setShowAdd} />}
      {inventory.length > 0 ? (
        <Items inventory={inventory} deleteItem={deleteItem} />
      ) : (
        loading
      )}
    </div>
  );
};

export default OrderPage;
