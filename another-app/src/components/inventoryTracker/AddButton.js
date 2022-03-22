const AddButton = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="shadow appearance-none rounded py-2 px-3 
      text-gray-100 mb-3 leading-tight focus:outline-none 
      focus:shadow-outline"
    >
      {text}
    </button>
  );
};

export default AddButton;
