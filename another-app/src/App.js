import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import InventoryTracker from "./components/inventoryTracker/InventoryTracker";
import NavBar from "./components/navBar/NavBar";
import OrderPage from "./components/orderPage/OrderPage";
import ProfilesPage from "./components/profilesPage/ProfilesPage";

// TO DO
// default profiles
// inv page dates actually dynamic

function App() {
  const serverURL = "http://localhost:3000";
  const inventoryURL = "inventory";
  const orderPageURL = "order";
  const profilesURL = "profiles";

  const [inventory, setInventory] = useState([]);
  const [profiles, setProfiles] = useState({});
  const [orders, setOrders] = useState([]);

  // Fetch Inventory
  const fetchInventory = async () => {
    const res = await fetch(`/api/${inventoryURL}`);
    const data = await res.json();
    return data;
  };

  const fetchProfiles = async () => {
    const res = await fetch(`${serverURL}/api/${profilesURL}`);
    const data = await res.json();
    return data;
  };

  const fetchOrders = async () => {
    const res = await fetch(`${serverURL}/api/orders`);
    const data = await res.json();
    return data;
  };

  // Get inventory on page load
  useEffect(() => {
    const getInventory = async () => {
      const inventory = await fetchInventory();
      setInventory(inventory);
    };
    getInventory();

    const getProfiles = async () => {
      const profiles = await fetchProfiles();
      setProfiles(profiles);
    };
    getProfiles();

    const getOrders = async () => {
      const orders = await fetchOrders();
      setOrders(orders);
    };
    getOrders();
  }, []);

  const addItem = async (item) => {
    const postInventory = async () => {
      await fetch(`/api/${inventoryURL}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(item),
      });
    };
    postInventory();

    inventory.push(item);
    setInventory([...inventory]);
  };

  const editItem = async (item, amount) => {
    item.amount = amount;

    const patchInventoryItem = async () => {
      await fetch(`/api/${inventoryURL}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(item),
      });
    };
    patchInventoryItem();

    setInventory([...inventory]);
  };

  const deleteItem = async (item) => {
    const deleteInventoryItem = async () => {
      await fetch(`/api/${inventoryURL}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(item),
      });
    };
    deleteInventoryItem();

    setInventory(inventory.filter((e) => e !== item));
  };

  const storeOrder = (order) => {
    const time = Date.now();

    const postOrders = async () => {
      await fetch(`${serverURL}/api/orders`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ orders: order, time }),
      });
    };

    postOrders();

    orders.push({ orders: order, time: time });
    setOrders([...orders]);
  };

  const storeProfile = (profile) => {
    profiles[profile.name] = profile;
    setProfiles(Object.assign({}, profiles));

    const postProfiles = async () => {
      await fetch(`/api/${profilesURL}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ items: profiles }),
      });
    };

    postProfiles();
  };

  return (
    <Router>
      <div className="pb-20 overflow-auto">
        <Routes>
          <Route
            path={`/${inventoryURL}`}
            element={
              <InventoryTracker
                inventory={inventory}
                addItem={addItem}
                deleteItem={deleteItem}
                editItem={editItem}
              />
            }
          />
          <Route
            path={`/${orderPageURL}`}
            element={
              <OrderPage
                inventory={inventory}
                profiles={profiles}
                storeOrder={storeOrder}
              />
            }
          />
          <Route
            path={`/${profilesURL}`}
            element={
              <ProfilesPage
                inventory={inventory}
                profiles={profiles}
                storeProfile={storeProfile}
                orders={orders}
              />
            }
          />
          <Route path="/" element={<Navigate to={inventoryURL} />} />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
