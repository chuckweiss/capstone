import ProfileItem from "./ProfileItem";

const ProfileItems = ({ inventory, profiles, profileName, storeProfile }) => {
  const profile = profiles[profileName];

  let profileAmounts = inventory.map((item) => parseInt(profile[item.text]));

  const changeProfileAmount = (i, amount) => (profileAmounts[i] = amount);

  const onSubmit = (e) => {
    e.preventDefault();
    storeProfile(
      profileName,
      profileAmounts.map((amount, i) => [inventory[i].text, amount])
    );
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
          amount={profileAmounts[i] || 0}
          setAmount={(amount) => changeProfileAmount(i, amount)}
          profile={profile}
        />
      ))}

      <input
        className="shadow rounded py-2 px-1 mt-4 
        text-gray-100 leading-tight focus:outline-none 
        focus:shadow-outline bg-green-900"
        type="submit"
        value="Save Profile"
      />
    </form>
  );
};

export default ProfileItems;
