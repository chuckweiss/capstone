const ProfileSelect = ({ profiles, profileName, setProfileName }) => {
  return (
    <select
      className=""
      value={profileName}
      onChange={(e) => setProfileName(e.target.value)}
    >
      {Object.entries(profiles).map(([name, items], i) => (
        <option key={i} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default ProfileSelect;
