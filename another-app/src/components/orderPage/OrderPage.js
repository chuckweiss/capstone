import { useState } from "react";
import OrderItems from "./orderItems/OrderItems";
import ProfileSelect from "./ProfileSelect";

const OrderPage = ({ inventory, profiles }) => {
  const [profile, setProfile] = useState(profiles.profile1);

  return (
    <div className="flex flex-col items-center py-4">
      <h1 className="w-screen flex flex-row justify-evenly py-2">
        <div>Orders</div>
      </h1>

      <ProfileSelect
        profiles={profiles}
        profile={profile}
        setProfile={setProfile}
      />

      <OrderItems inventory={inventory} profile={profile} />
    </div>
  );
};

export default OrderPage;
