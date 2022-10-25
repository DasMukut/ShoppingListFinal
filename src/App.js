// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React,  { useEffect, useState } from "react";

import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import { AppContext } from "./context";

const getLocalItem = () => {
  let list1 = localStorage.getItem("list");
  if (list1) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

function App() {
  const [items, setItems] = useState(getLocalItem());
  const [showDisplay, setShowDisplay] = useState("");

  const dispatchItemEvent = (actionType, payload) => {
    switch (actionType) {
      case "ADD_ITEM":
        setItems([...items, payload.newItem]);

        setShowDisplay(() => setShowDisplay(!showDisplay));
        return;
      case "REMOVE_ITEM":
        setItems(items.filter((item) => item.id !== payload.itemId));
        return;
      case "Toggle_Button":
        setShowDisplay(() => setShowDisplay(!showDisplay));
        return;
      case "ADD_Button":
        setShowDisplay(() => setShowDisplay(!showDisplay));
        return;
      default:
        return;
    }
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]);

  return (
    <div className="App">
      <AppContext.Provider value={{ items, dispatchItemEvent }}>
        {showDisplay ? <AddItem /> : <ItemList />}
      </AppContext.Provider>
    </div>
  );
}

export default App;
