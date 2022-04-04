const ProfileSelect = ({ profiles, profile, setProfile }) => {
  return (
    <select
      value={profile.name}
      onChange={(e) => setProfile(profiles[e.target.value])}
    >
      {Object.entries(profiles).map(([name, items]) => (
        <option value={name}>{name}</option>
      ))}
    </select>
  );
};

export default ProfileSelect;
