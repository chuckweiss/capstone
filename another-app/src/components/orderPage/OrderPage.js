import { useState } from "react";
import OrderItems from "./orderItems/OrderItems";
import ProfileSelect from "./ProfileSelect";

const OrderPage = ({ inventory, profiles, storeOrder }) => {
  const [profileName, setProfileName] = useState("profile2");

  return (
    <div className="flex flex-col items-center py-4">
      <h1 className="w-screen flex flex-row justify-evenly py-2">
        <div>Orders</div>
      </h1>

      <ProfileSelect
        profiles={profiles}
        profileName={profileName}
        setProfileName={setProfileName}
      />

      {profiles[profileName] && (
        <OrderItems
          inventory={inventory}
          profile={profiles[profileName]}
          storeOrder={storeOrder}
        />
      )}
    </div>
  );
};

export default OrderPage;
