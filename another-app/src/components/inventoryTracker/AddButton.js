const AddButton = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="inline-block"
    >
      {text}
    </button>
  );
};

export default AddButton;
