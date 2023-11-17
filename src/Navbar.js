import { Clear } from "./Clear";
import { AddForm } from "./AddForm";
import { Logo } from "./Logo";

export function Navbar({ onAdditems, ondeleteitems }) {
  return (
    <div className="nav-bar">
      <Logo />
      <AddForm onAdditems={onAdditems} />
      <Clear ondeleteitems={ondeleteitems} />
    </div>
  );
}
