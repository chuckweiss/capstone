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
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Item</label>
        <input
          type="text"
          placeholder="Item Name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Amount</label>
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="text"
          placeholder="Add Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <input type="submit" value="Save Item" className="addbtn addbtn-block" />
    </form>
  );
};

export default AddItem;
