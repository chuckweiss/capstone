import { useState } from "react";
import EditButton from "./EditButton";
import EditItem from "./EditItem";

const EditAmount = ({ editItem, item }) => {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <EditButton color="Blue" onClick={() => setShowEdit(!showEdit)} />
      {showEdit && (
        <EditItem onEdit={editItem} setShowEdit={setShowEdit} item={item} />
      )}
    </div>
  );
};

export default EditAmount;
