export function Clear({ ondeleteitems }) {
  return (
    <button className="clear-item" onClick={ondeleteitems}>
      Clear all
    </button>
  );
}
