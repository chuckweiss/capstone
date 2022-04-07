import React, { useEffect, useState, useRef } from "react";
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

function App() {
  const serverURL = "http://localhost:5000";
  const inventoryURL = "inventory";
  const orderPageURL = "order";
  const profilesURL = "profiles";

  const [inventory, setInventory] = useState([]);
  const [profiles, setProfiles] = useState({});
  const [orders, setOrders] = useState([]);

  const isInitialMount = useRef(true);

  // Fetch Inventory
  const fetchInventory = async () => {
    const res = await fetch(`${serverURL}/${inventoryURL}`);
    const data = await res.json();
    return data[0].items;
  };

  const fetchProfiles = async () => {
    const res = await fetch(`${serverURL}/${profilesURL}`);
    const data = await res.json();
    return data[0].items;
  };

  const fetchOrders = async () => {
    const res = await fetch(`${serverURL}/orders`);
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

  // Keep inventory updated on server
  useEffect(() => {
    const postInventory = async () => {
      await fetch(`${serverURL}/${inventoryURL}/1`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ items: inventory }),
      });
    };

    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      postInventory();
    }
  }, [inventory]);

  const addItem = async (item) => {
    inventory.push(item);
    setInventory([...inventory]);
  };

  const editItem = async (item, amount) => {
    console.log(item, amount);
    item.amount = amount;
    setInventory([...inventory]);
  };

  const deleteItem = async (item) => {
    setInventory(inventory.filter((e) => e !== item));
  };

  const storeOrder = (order) => {
    const time = Date.now();

    const postOrders = async () => {
      await fetch(`${serverURL}/orders`, {
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
      await fetch(`${serverURL}/${profilesURL}/1`, {
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
