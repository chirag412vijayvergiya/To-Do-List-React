import { useState } from "react";
import { Stats } from "./Stats";
import { Main } from "./Main";
import { Navbar } from "./Navbar";

export default function App() {
  const [priority1, setPriority1] = useState([]);
  const [priority2, setPriority2] = useState([]);
  const [priority3, setPriority3] = useState([]);

  const handleAdditems = (item) => {
    if (item.priority === 1) {
      setPriority1((prevPriority1) => [...prevPriority1, item]);
    } else if (item.priority === 2) {
      setPriority2((prevPriority2) => [...prevPriority2, item]);
    } else if (item.priority === 3) {
      setPriority3((prevPriority3) => [...prevPriority3, item]);
    } else {
      // Handle other cases here or add it to a default priority
    }
  };
  //Handle delete all items
  function handledeleteitems(e) {
    e.preventDefault();
    const confirmed = window.confirm(
      "Are you sure you want to delete all items ?"
    );
    if (confirmed) {
      setPriority1([]);
      setPriority2([]);
      setPriority3([]);
    }
  }

  //Handle delete items list wise
  const handleDeleteItems123 = (priority, e) => {
    e.preventDefault();
    const confirmed = window.confirm(
      `Are you sure you want to delete all items of priority-${priority}?`
    );
    if (confirmed) {
      switch (priority) {
        case 1:
          setPriority1([]);
          break;
        case 2:
          setPriority2([]);
          break;
        case 3:
          setPriority3([]);
          break;
        default:
        // Handle unexpected priority value
      }
    }
  };

  //Handle delete item on click red button like single item
  function handledeleteitem(id, priority) {
    console.log(priority);
    console.log(id);
    switch (priority) {
      case 1:
        setPriority1((items) => items.filter((item) => item.id !== id));
        break;
      case 2:
        setPriority2((items) => items.filter((item) => item.id !== id));
        break;
      case 3:
        setPriority3((items) => items.filter((item) => item.id !== id));
        break;
      default:
      // Handle unexpected priority value
    }
  }

  //Handle toggle items packed or not
  function handleToggleitems(id, priority) {
    switch (priority) {
      case 1:
        setPriority1((items) =>
          items.map((item) =>
            item.id === id ? { ...item, done: !item.done } : item
          )
        );
        break;
      case 2:
        setPriority2((items) =>
          items.map((item) =>
            item.id === id ? { ...item, done: !item.done } : item
          )
        );
        break;
      case 3:
        setPriority3((items) =>
          items.map((item) =>
            item.id === id ? { ...item, done: !item.done } : item
          )
        );
        break;
      default:
      // Handle unexpected priority value
    }
  }

  return (
    <div>
      <Navbar onAdditems={handleAdditems} ondeleteitems={handledeleteitems} />
      <Main
        onpriority1={priority1}
        onpriority2={priority2}
        onpriority3={priority3}
        onDeleteItems123={handleDeleteItems123}
        onDeleitem={handledeleteitem}
        ontoggleitem={handleToggleitems}
      />
      <Stats
        onpriority1={priority1}
        onpriority2={priority2}
        onpriority3={priority3}
      />
    </div>
  );
}
