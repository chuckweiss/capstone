import ProfileItem from "./ProfileItem";
import NewProfileInput from "./NewProfileInput";
import { useState } from "react";

const ProfileItems = ({ inventory, profile, setProfile, storeProfile }) => {
  let amounts = inventory.map((item) => parseInt(profile[item.text]));
  const changeAmounts = (i, amount) => (amounts[i] = amount);

  const [showModal, setShowModal] = useState(false);

  let newProfileName = "";
  const setNewProfileName = (s) => (newProfileName = s);

  const onSubmit = (e) => {
    e.preventDefault();

    const name = newProfileName.length > 0 ? newProfileName : profile.name;
    const data = amounts.map((amount, i) => [inventory[i].text, amount]);
    const p = Object.fromEntries(data);
    p.name = name;

    setProfile(p);
    storeProfile(p);
  };

  return (
    <form
      className="rounded-sm px-12 py-4 m-2 w-80 
      shadow-2xl flex flex-col items-center"
      onSubmit={onSubmit}
    >
      {inventory.map((item, i) => (
        <ProfileItem
          key={i}
          item={item}
          amount={amounts[i]}
          setAmount={(amount) => changeAmounts(i, amount)}
          profile={profile}
        />
      ))}

      <input
        className="shadow rounded py-2 px-1 mt-4 
        text-gray-100 leading-tight focus:outline-none 
        focus:shadow-outline bg-green-900 cursor-pointer"
        type="submit"
        value="Save Profile"
      />

      <NewProfileInput
        showModal={showModal}
        setShowModal={setShowModal}
        newProfileName={newProfileName}
        setNewProfileName={setNewProfileName}
        onSubmit={onSubmit}
      />
    </form>
  );
};

export default ProfileItems;
