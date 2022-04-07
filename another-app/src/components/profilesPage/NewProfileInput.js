import { useEffect, useState } from "react";

const NewProfileInput = ({
  showModal,
  setShowModal,
  newProfileName,
  setNewProfileName,
  onSubmit,
}) => {
  const [value, setValue] = useState(newProfileName);

  useEffect(() => {
    setValue(newProfileName);
  }, [newProfileName]);

  return (
    <div>
      <button
        className="shadow rounded py-2 px-1 mt-4
        text-gray-100 leading-tight focus:outline-none
        focus:shadow-outline bg-green-900"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Save as New Profile
      </button>
      {showModal && (
        <>
          <div
            className="justify-center items-center flex 
          overflow-x-hidden overflow-y-auto fixed inset-0 
          z-50 outline-none focus:outline-none"
          >
            <div
              className="relative w-auto my-6 
            mx-auto max-w-3xl"
            >
              {/*content*/}
              <div
                className="border-0 rounded-lg shadow-lg 
              relative flex flex-col w-full bg-white outline-none 
              focus:outline-none"
              >
                {/*header*/}
                <div
                  className="flex items-start justify-between 
                p-5 border-b border-solid border-slate-200 
                rounded-t"
                >
                  <h3 className="text-3xl font-semibold">Save a New Profile</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <label>New Profile Name</label>
                  <input
                    className="shadow appearance-none
                    border rounded w-full py-2 px-3 text-gray-700
                    leading-tight focus:outline-none focus:shadow-outline
                    text-right"
                    type="text"
                    placeholder="Profile Name"
                    value={value}
                    onChange={(e) => {
                      const val = e.target.value;
                      setNewProfileName(val);
                      setValue(val);
                    }}
                  />
                  {/* <h1>ProfileName: {newProfileName}</h1> */}
                </div>
                {/*footer*/}
                <div
                  className="flex items-center justify-end p-6 
                border-t border-solid border-slate-200 rounded-b"
                >
                  <button
                    className="text-red-500 background-transparent 
                    font-bold uppercase px-6 py-2 text-sm outline-none 
                    focus:outline-none mr-1 mb-1 ease-linear 
                    transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setNewProfileName("");
                      setValue("");
                      setShowModal(false);
                    }}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white 
                    active:bg-emerald-600 font-bold uppercase 
                    text-sm px-6 py-3 rounded shadow hover:shadow-lg 
                    outline-none focus:outline-none mr-1 mb-1 ease-linear 
                    transition-all duration-150"
                    type="button"
                    onClick={(e) => {
                      setShowModal(false);
                      onSubmit(e);
                      setNewProfileName("");
                      setValue("");
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </div>
  );
};

export default NewProfileInput;
