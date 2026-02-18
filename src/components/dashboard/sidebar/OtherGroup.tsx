import { Component, Lock, PieChart } from "lucide-react";
import Link from "next/link";

export default function OtherGroup() {
  return (
    <div>
      <h2 className="mb-2 text-xs font-semibold tracking-widest text-base-content/50 uppercase">
        OTHERS
      </h2>
      <ul className="menu menu-md w-full p-0">
        <li>
          <details>
            <summary>
              <PieChart size={20} />
              Charts
            </summary>
            <ul>
              <li>
                <Link href="/charts/line">Line Chart</Link>
              </li>
              <li>
                <Link href="/charts/bar">Bar Chart</Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <Component size={20} />
              UI Elements
            </summary>
            <ul className="max-h-60 overflow-y-auto">
              <li>
                <Link href="/ui/alerts">Alerts</Link>
              </li>
              <li>
                <Link href="/ui/buttons">Buttons</Link>
              </li>
              <li>
                <Link href="/ui/cards">Cards</Link>
              </li>
              <li>
                <Link href="/ui/modals">Modals</Link>
              </li>
              <li>
                <Link href="/ui/tabs">Tabs</Link>
              </li>
              <li>
                <Link href="/ui/tooltips">Tooltips</Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <Lock size={20} />
              Authentication
            </summary>
            <ul>
              <li>
                <Link href="/auth/signin">Sign In</Link>
              </li>
              <li>
                <Link href="/auth/signup">Sign Up</Link>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}
