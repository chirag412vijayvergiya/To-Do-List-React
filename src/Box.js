import { useState } from "react";

export function Box({
  onitems,
  children,
  priority,
  onDeleteItems123,
  onDeleitem,
  ontoggleitem,
}) {
  const [sortBy, setsortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = onitems;
  if (sortBy === "description") {
    sortedItems = onitems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "done") {
    sortedItems = onitems
      .slice()
      .sort((a, b) => Number(a.done) - Number(b.done));
  }

  return (
    <div className="box">
      <h3>
        {priority}
        {children}
      </h3>
      <div className="list">
        {onitems && Array.isArray(onitems)
          ? sortedItems.map((item) => (
              <li key={item.id}>
                <input
                  type="checkbox"
                  value={item.done}
                  onChange={() => ontoggleitem(item.id, priority)}
                />
                <input
                  className="text"
                  type="text"
                  readOnly={true}
                  value={item.description}
                  style={item.done ? { textDecoration: "line-through" } : {}}
                ></input>
                <button onClick={() => onDeleitem(item.id, priority)}>
                  ❌
                </button>
              </li>
            ))
          : ""}
      </div>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setsortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="done">Sort by done status</option>
        </select>
        <button onClick={(e) => onDeleteItems123(priority, e)}>
          Clear List
        </button>
      </div>
    </div>
  );
}
