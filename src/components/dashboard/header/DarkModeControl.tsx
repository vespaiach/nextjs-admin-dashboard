import { Moon, Sun } from "lucide-react";

export default function DarkModeControl() {
  return (
    <div>
      <label className="swap swap-rotate btn btn-ghost btn-circle btn-md bg-base-200">
        <input type="checkbox" className="theme-controller" value="dark" />
        <Sun className="swap-on" size={20} />
        <Moon className="swap-off" size={20} />
      </label>
    </div>
  );
}
