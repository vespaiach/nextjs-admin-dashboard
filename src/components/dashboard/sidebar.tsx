import {
  Calendar,
  CheckSquare,
  Component,
  Copy,
  FileText,
  LayoutGrid,
  Lock,
  Mail,
  MessageSquare,
  PieChart,
  ShoppingCart,
  Table,
  User,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="py-4 px-4 w-70 md:w-72 min-h-full bg-base-100 text-base-content border-r border-base-200 overflow-y-auto">
      <div className="mb-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
          <div className="bg-primary text-primary-content p-1 rounded-lg">
            <Zap size={24} fill="currentColor" />
          </div>
          <span>Admin</span>
        </Link>
      </div>

      <nav className="flex flex-col gap-5">
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
                    <Link href="/dashboard/ecommerce" className="active">
                      eCommerce
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/analytics">Analytics</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/marketing">Marketing</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/crm">CRM</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/stocks">Stocks</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/saas">SaaS</Link>
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

        {/* SUPPORT Group */}
        <div>
          <h2 className="mb-2 text-xs font-semibold tracking-widest text-base-content/50 uppercase">
            SUPPORT
          </h2>
          <ul className="menu menu-md w-full p-0">
            <li>
              <Link href="/messages">
                <MessageSquare size={20} />
                Messages
                <span className="badge badge-sm badge-primary">5</span>
              </Link>
            </li>
            <li>
              <Link href="/inbox">
                <Mail size={20} />
                Inbox
              </Link>
            </li>
          </ul>
        </div>

        {/* OTHERS Group */}
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
      </nav>
    </div>
  );
}
