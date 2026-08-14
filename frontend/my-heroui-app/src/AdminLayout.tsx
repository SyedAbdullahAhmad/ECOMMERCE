import React, { useState } from "react";
import { Button, Avatar } from "@heroui/react";
import {
  Menu,
  X,
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  Tag,
  Settings,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/adminPanel",
    },
    {
      name: "Orders",
      icon: ShoppingBag,
      path: "/adminOrders",
    },
    {
      name: "Products",
      icon: Package,
      path: "/adminProducts",
    },
    {
      name: "Customers",
      icon: Users,
      path: "/adminCustomers",
    },
    {
      name: "Categories",
      icon: Tag,
      path: "/adminCategories",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/adminSettings",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Sidebar */}
      <aside
        className={`bg-white border-r border-gray-200 min-h-screen
        transition-all duration-300
        ${sidebarOpen ? "w-64" : "w-20"}`}
      >
        {/* Logo */}
        <div className="h-20 flex items-center px-5 border-b border-gray-200">

          {sidebarOpen && (
            <h1 className="text-xl font-bold text-gray-900">
              E-Commerce
            </h1>
          )}

        </div>

        {/* Menu */}
        <nav className="p-3 space-y-2 mt-4">

          {menuItems.map((item) => {

            const Icon = item.icon;

            return (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className="w-full flex items-center gap-4 px-4 py-3
                rounded-xl text-gray-600 hover:bg-gray-100
                transition"
              >

                <Icon size={20} />

                {sidebarOpen && (
                  <span className="text-sm font-medium">
                    {item.name}
                  </span>
                )}

              </button>
            );
          })}

        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1">

        {/* Admin Header */}
        <header
          className="h-20 bg-white border-b border-gray-200
          flex items-center justify-between px-6"
        >

          <div className="flex items-center gap-4">

            {/* Hamburger */}
            <Button
              isIconOnly
              variant="light"
              onPress={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </Button>

            <h2 className="text-xl font-semibold">
              Admin Panel
            </h2>

          </div>

          {/* Admin */}
          <div className="flex items-center gap-3">

            <Avatar
              name="Admin"
              size="sm"
            />

            <div className="hidden md:block">

              <p className="text-sm font-semibold">
                Admin
              </p>

              <p className="text-xs text-gray-500">
                Administrator
              </p>

            </div>

          </div>

        </header>

        {/* Page Content */}
        {children}

      </main>

    </div>
  );
};

export default AdminLayout;