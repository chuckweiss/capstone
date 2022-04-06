import { useState } from "react";

const ProfileItem = ({ item, amount, setAmount, profile }) => {
  const [value, setValue] = useState(parseInt(profile[item.text]));

  return (
    <div className="py-3">
      <h3 className="flex flex-row justify-evenly pb-1">{item.text}</h3>

      <div className="flex flex-row justify-between pb-1">
        Profile Amount:
        <p>{profile[item.text] || "None"}</p>
      </div>

      <div className="">
        <label>New Amount</label>
        <input
          className="shadow appearance-none 
          border rounded w-full py-2 px-3 text-gray-700 
          leading-tight focus:outline-none focus:shadow-outline 
          text-right"
          type="text"
          value={value || 0}
          onChange={(e) => {
            const val = parseInt(e.target.value) || 0;
            setValue(val);
            setAmount(val);
          }}
        />
      </div>
    </div>
  );
};

export default ProfileItem;
