import EditButton from "./EditButton";
import EditItem from "./EditItem";
import { useState } from "react";


const Item = ({ item, deleteItem, editItem }) => {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className="py-3" onDoubleClick={() => deleteItem(item.id)}>
      <h3 className="flex flex-row justify-between pb-1">
        {item.text}
        <div>{item.amount}</div>
      <EditButton 
      color='Blue'
      onClick={() => setShowEdit(!showEdit)}
      />
      {showEdit && <EditItem onEdit={editItem} setShowEdit={setShowEdit} />}

      </h3>
      <p className="flex flex-row justify-between">
        Last order date:
        <p>{item.date}</p>
      </p>  
    </div>
    
  );
};

export default Item;
