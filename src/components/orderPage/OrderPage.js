import { useEffect, useState } from "react";
import OrderItems from "./orderItems/OrderItems";
import ProfileSelect from "./ProfileSelect";

const OrderPage = ({ inventory, profiles, storeOrder }) => {
  const [profile, setProfile] = useState(profiles.profile2);

  useEffect(() => {
    if (!profile && profiles.profile2) {
      setProfile(profiles.profile2);
    }
  }, [profiles, profile]);

  return (
    <div className="flex flex-col items-center py-4">
      <h1 className="w-screen flex flex-row justify-evenly py-2">
        <div>Orders</div>
      </h1>

      {profile && (
        <>
          <ProfileSelect
            profiles={profiles}
            profile={profile}
            setProfile={setProfile}
          />

          <OrderItems
            inventory={inventory}
            profile={profile}
            storeOrder={storeOrder}
          />
        </>
      )}
    </div>
  );
};

export default OrderPage;
