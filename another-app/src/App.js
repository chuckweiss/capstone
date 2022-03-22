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

function App() {
  const serverURL = "http://localhost:5000";
  const inventoryURL = "inventory";

  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState("Loading...");

  // Get inventory on page load
  useEffect(() => {
    setLoading("Loading..."); // I don't think this is working

    const getInventory = async () => {
      const inventory = await fetchInventory();
      setInventory(inventory);
    };
    getInventory();

    inventory.length === 0 && setLoading("No Items"); // see above
  }, []);

  // Fetch Inventory
  const fetchInventory = async () => {
    const res = await fetch(`${serverURL}/${inventoryURL}`);
    const data = await res.json();
    return data;
  };

  // Add Item
  const addItem = async (item) => {
    const res = await fetch(`${serverURL}/${inventoryURL}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(item),
    });

    const data = await res.json();

    // I think this causes useEffect meaning we do the same thing twice
    setInventory([...inventory, data]);
  };

  const deleteItem = async (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
    await fetch(`${serverURL}/${inventoryURL}/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <Router>
      <div className="">
        <Routes>
          <Route
            path={`/${inventoryURL}`}
            element={
              <InventoryTracker
                inventory={inventory}
                addItem={addItem}
                deleteItem={deleteItem}
                loading={loading}
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
