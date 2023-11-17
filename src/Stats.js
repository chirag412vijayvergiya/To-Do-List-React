export function Stats({ onpriority1, onpriority2, onpriority3 }) {
  const priority1items = onpriority1.length;
  const priority2items = onpriority2.length;
  const priority3items = onpriority3.length;
  const numItems = priority1items + priority2items + priority3items;
  if (!numItems)
    return (
      <p className="stats">
        <em>Add your goals for today. 🧙‍♂️</em>
      </p>
    );
  const numdone1 = onpriority1.filter((item) => item.done).length;
  const numdone2 = onpriority2.filter((item) => item.done).length;
  const numdone3 = onpriority3.filter((item) => item.done).length;
  const numdone = numdone1 + numdone2 + numdone3;
  let numPackedper = 0;
  numPackedper = Math.round((numdone / numItems) * 100);
  return (
    <p className="stats">
      <em>
        {" "}
        {numPackedper === 100
          ? "💪 Yay ! You did everything ! Ready to sleep "
          : `You have ${numItems} ${
              numItems === 1 ? "task" : "tasks"
            } in your list, and you already done.
        ${numdone} (${numPackedper}%)`}
      </em>
    </p>
  );
}
