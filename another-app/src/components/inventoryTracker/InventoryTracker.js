import { useState } from "react";
import Items from "./items/Items";
import AddButton from "./AddButton";
import AddItem from "./AddItem";

const InventoryTracker = ({ inventory, addItem, deleteItem, editItem }) => {
  document.title = `Inventory - ${inventory.length} items`;

  const [showAdd, setShowAdd] = useState(false);

  return (
    <div className="flex flex-col items-center py-4">
      <h1 className="w-screen flex flex-row justify-evenly py-2">
        <div>Inventory Tracker</div>
        <AddButton
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={() => setShowAdd(!showAdd)}
        />
      </h1>

      {showAdd && <AddItem onAdd={addItem} setShowAdd={setShowAdd} />}
      <Items
        inventory={inventory}
        deleteItem={deleteItem}
        editItem={editItem}
      />
    </div>
  );
};

export default InventoryTracker;
