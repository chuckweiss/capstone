const AddButton = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="addbtn"
    >
      {text}
    </button>
  );
};

export default AddButton;
