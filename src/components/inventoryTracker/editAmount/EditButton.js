const EditButton = ({ color, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{ backgroundColor: color }}
        className="shadow rounded py-1 px-1 
        text-gray-100 leading-tight focus:outline-none 
        focus:shadow-outline"
      >
        <i className="material-icons">edit_note</i>
      </button>
    </div>
  );
};

export default EditButton;
