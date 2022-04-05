import { useState } from "react";
import ProfileItems from "./ProfileItems";
import ProfileSelect from "../orderPage/ProfileSelect";

const ProfilesPage = ({ inventory, profiles, storeProfile }) => {
  const [profileName, setProfileName] = useState("profile1");

  return (
    <div className="flex flex-col items-center py-4">
      <h1 className="w-screen flex flex-row justify-evenly py-2">
        <div>Profiles</div>
      </h1>

      <ProfileSelect
        profiles={profiles}
        profileName={profileName}
        setProfileName={setProfileName}
      />

      {profiles[profileName] && (
        <ProfileItems
          inventory={inventory}
          profile={profiles[profileName]}
          profileName={profileName}
          storeProfile={storeProfile}
        />
      )}
    </div>
  );
};

export default ProfilesPage;
