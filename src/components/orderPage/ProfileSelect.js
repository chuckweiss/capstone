const ProfileSelect = ({ profiles, profile, setProfile }) => {
  return (
    <select
      className=""
      value={profile.name}
      onChange={(e) => setProfile(profiles[e.target.value])}
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
