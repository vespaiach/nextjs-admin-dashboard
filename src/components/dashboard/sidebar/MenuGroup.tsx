"use client";

import {
  Calendar,
  CheckSquare,
  Copy,
  FileText,
  LayoutGrid,
  ShoppingCart,
  Table,
  User,
  Zap,
} from "lucide-react";
import MenuItem from "./MenuItem";

export default function MenuGroup() {
  return (
    <div>
      <h2 className="mb-2 text-xs font-semibold tracking-widest text-base-content/50 uppercase">
        MENU
      </h2>
      <ul className="menu menu-md w-full p-0">
        <li>
          <details open>
            <summary className="group">
              <LayoutGrid size={20} />
              Dashboard
            </summary>
            <ul>
              <MenuItem href="/dashboard/ecommerce" label="eCommerce" />
              <MenuItem href="/dashboard/analytics" label="Analytics" />
              <MenuItem href="/dashboard/marketing" label="Marketing" />
              <MenuItem href="/dashboard/crm" label="CRM" />
              <MenuItem href="/dashboard/stocks" label="Stocks" />
              <MenuItem href="/dashboard/saas" label="SaaS" />
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <Zap size={20} className="text-warning" />
              AI Assistant
              <span className="badge badge-xs badge-secondary">New</span>
            </summary>
            <ul>
              <MenuItem href="/ai/text" label="Text Generator" />
              <MenuItem href="/ai/image" label="Image Generator" />
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <ShoppingCart size={20} />
              E-commerce
              <span className="badge badge-xs badge-secondary">New</span>
            </summary>
            <ul>
              <MenuItem href="/ecommerce/products" label="Products" />
              <MenuItem href="/ecommerce/billing" label="Billing" />
            </ul>
          </details>
        </li>
        <MenuItem href="/calendar" label="Calendar" icon={<Calendar size={20} />} />
        <MenuItem href="/profile" label="Profile" icon={<User size={20} />} />
        <li>
          <details>
            <summary>
              <CheckSquare size={20} />
              Task
            </summary>
            <ul>
              <MenuItem href="/tasks/list" label="List" />
              <MenuItem href="/tasks/kanban" label="Kanban" />
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <FileText size={20} />
              Forms
            </summary>
            <ul>
              <MenuItem href="/forms/elements" label="Form Elements" />
              <MenuItem href="/forms/layout" label="Form Layout" />
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <Table size={20} />
              Tables
            </summary>
            <ul>
              <MenuItem href="/tables/basic" label="Basic Tables" />
              <MenuItem href="/tables/data" label="Data Tables" />
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <Copy size={20} />
              Pages
            </summary>
            <ul>
              <MenuItem href="/pages/settings" label="Settings" />
              <MenuItem href="/pages/file-manager" label="File Manager" />
              <MenuItem href="/pages/pricing" label="Pricing Tables" />
              <MenuItem href="/pages/faq" label="FAQ" />
              <MenuItem href="/pages/blank" label="Blank Page" />
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}
