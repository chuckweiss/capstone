import { useEffect, useState } from "react";
import ProfileItems from "./ProfileItems";
import ProfileSelect from "../orderPage/ProfileSelect";
import OrderProfileSelect from "./OrderProfileSelect";

const ProfilesPage = ({ inventory, profiles, storeProfile, orders }) => {
  const [profile, setProfile] = useState(profiles.profile2);

  useEffect(() => {
    if (!profile && profiles.profile2) {
      setProfile(profiles.profile2);
    }
  }, [profiles, profile]);

  return (
    <div className="flex flex-col items-center py-4">
      <h1 className="w-screen flex flex-row justify-evenly py-2">
        <div>Profiles</div>
      </h1>

      {profile && (
        <>
          <OrderProfileSelect orders={orders} setProfile={setProfile} />
          <ProfileSelect
            profiles={profiles}
            profile={profile}
            setProfile={setProfile}
          />
          Selected Profile: {profile.name}
          <ProfileItems
            inventory={inventory}
            profile={profile}
            setProfile={setProfile}
            storeProfile={storeProfile}
          />
        </>
      )}
    </div>
  );
};

export default ProfilesPage;
