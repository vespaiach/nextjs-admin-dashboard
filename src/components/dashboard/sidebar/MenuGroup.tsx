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
import Link from "next/link";

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
              <li>
                <Link href="/ecommerce" className="active">
                  eCommerce
                </Link>
              </li>
              <li>
                <Link href="/analytics">Analytics</Link>
              </li>
              <li>
                <Link href="/marketing">Marketing</Link>
              </li>
              <li>
                <Link href="/crm">CRM</Link>
              </li>
              <li>
                <Link href="/stocks">Stocks</Link>
              </li>
              <li>
                <Link href="/saas">SaaS</Link>
              </li>
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
              <li>
                <Link href="/ai/text">Text Generator</Link>
              </li>
              <li>
                <Link href="/ai/image">Image Generator</Link>
              </li>
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
              <li>
                <Link href="/ecommerce/products">Products</Link>
              </li>
              <li>
                <Link href="/ecommerce/billing">Billing</Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <Link href="/calendar">
            <Calendar size={20} />
            Calendar
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <User size={20} />
            Profile
          </Link>
        </li>
        <li>
          <details>
            <summary>
              <CheckSquare size={20} />
              Task
            </summary>
            <ul>
              <li>
                <Link href="/tasks/list">List</Link>
              </li>
              <li>
                <Link href="/tasks/kanban">Kanban</Link>
              </li>
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
              <li>
                <Link href="/forms/elements">Form Elements</Link>
              </li>
              <li>
                <Link href="/forms/layout">Form Layout</Link>
              </li>
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
              <li>
                <Link href="/tables/basic">Basic Tables</Link>
              </li>
              <li>
                <Link href="/tables/data">Data Tables</Link>
              </li>
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
              <li>
                <Link href="/pages/settings">Settings</Link>
              </li>
              <li>
                <Link href="/pages/file-manager">File Manager</Link>
              </li>
              <li>
                <Link href="/pages/pricing">Pricing Tables</Link>
              </li>
              <li>
                <Link href="/pages/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/pages/blank">Blank Page</Link>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}
