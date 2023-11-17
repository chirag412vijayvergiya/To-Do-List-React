import { useState } from "react";

export function AddForm({ onAdditems }) {
  const [priority, setpriority] = useState(1);
  const [description, setdescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      priority,
      done: false,
      id: Date.now(),
    };

    console.log(newItem);

    onAdditems(newItem);
    setdescription("");
    setpriority(1);
  }
  return (
    <form className="add-form1" onSubmit={handleSubmit}>
      <select
        className="priority"
        value={priority}
        onChange={(e) => setpriority(Number(e.target.value))}
      >
        <option value="1">Priority-1</option>
        <option value="2">Priority-2</option>
        <option value="3">Priority-3</option>
      </select>
      <input
        type="text"
        placeholder="✅ item to do..."
        className="add-work"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      ></input>
      <button className="add-form">Add</button>
    </form>
  );
}
