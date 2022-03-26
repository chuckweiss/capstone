const EditButton = ({ color, text, onClick }) => {
    return (
      <button
        onClick={onClick}
        style={{ backgroundColor: color }}
        className="shadow appearance-none rounded py-1 px-1 
        text-gray-100 mb-3 leading-tight focus:outline-none 
        focus:shadow-outline"
      >
        <i className="material-icons" >edit_note</i>
      </button>
    );
  };
  
  export default EditButton;