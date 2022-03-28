import { useState } from "react";
const EditItem = ({ onEdit, setShowEdit, item, }) => {
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!amount) {
      alert("No amount entered");
      return;
    }
    onEdit(item, {amount})
    setAmount(0);
    setShowEdit(false);
  };

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={onSubmit}
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Amount
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <input
        type="submit"
        value="Update"
        className="shadow appearance-none border 
        border-green-500 rounded w-full py-2 px-3 
        text-gray-700 mb-3 leading-tight focus:outline-none 
        focus:shadow-outline"
      />
    </form>
  );
};

export default EditItem;
