"use client";

import { Component, Lock, PieChart } from "lucide-react";
import MenuItem from "./MenuItem";

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
              <MenuItem href="/charts/line" label="Line Chart" />
              <MenuItem href="/charts/bar" label="Bar Chart" />
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
              <MenuItem href="/ui/alerts" label="Alerts" />
              <MenuItem href="/ui/buttons" label="Buttons" />
              <MenuItem href="/ui/cards" label="Cards" />
              <MenuItem href="/ui/modals" label="Modals" />
              <MenuItem href="/ui/tabs" label="Tabs" />
              <MenuItem href="/ui/tooltips" label="Tooltips" />
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
              <MenuItem href="/auth/signin" label="Sign In" />
              <MenuItem href="/auth/signup" label="Sign Up" />
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}
