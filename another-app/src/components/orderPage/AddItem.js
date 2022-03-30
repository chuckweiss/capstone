import { useState } from "react";

const AddItem = ({ onAdd, setShowAdd }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text || !amount || !date) {
      alert("Please add item");
      return;
    }

    onAdd({ text, amount, date });

    setText("");
    setAmount(0);
    setDate("");
    setShowAdd(false);
  };

  // each of these should be a component since it's repeated code
  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={onSubmit}
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Item
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Item Name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
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
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Date
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Add Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <input
        type="submit"
        value="Save Item"
        className="shadow appearance-none border 
        border-green-500 rounded w-full py-2 px-3 
        text-gray-700 mb-3 leading-tight focus:outline-none 
        focus:shadow-outline"
      />
    </form>
  );
};

export default AddItem;
