import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Input,
  Avatar,
  Badge,
} from "@heroui/react";

import {
  Menu,
  X,
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  Tag,
  Settings,
  Search,
  Bell,
  DollarSign,
  ShoppingCart,
  UserRound,
  Box,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate=useNavigate();
  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      active: true,
    },
    {
      name: "Orders",
      icon: ShoppingBag,
    },
    {
      name: "Products",
      icon: Package,
      onClick: ()=> navigate("/adminProducts"),   },
    {
      name: "Customers",
      icon: Users,
    },
    {
      name: "Categories",
      icon: Tag,
    },
    {
      name: "Settings",
      icon: Settings,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Sidebar */}
      <aside
        className={`bg-white border-r border-gray-200 min-h-screen transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="h-20 flex items-center px-5 border-b border-gray-200">
          {sidebarOpen && (
            <h1 className="text-xl font-bold text-gray-900">
              E-Commerce
            </h1>
          )}
        </div>

        <nav className="p-3 space-y-2 mt-4">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                onClick={item.onClick}  
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition
                  ${
                    item.active
                      ? "bg-black text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
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

        {/* Header */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6">

          <div className="flex items-center gap-4">

            {/* Hamburger */}
            <Button
              isIconOnly
              variant="light"
              onPress={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>

            <h2 className="text-xl font-semibold text-gray-900">
              Dashboard
            </h2>

          </div>

          <div className="flex items-center gap-5">

            <Input
              className="hidden md:flex w-64"
              placeholder="Search..."
              startContent={<Search size={18} />}
              variant="bordered"
            />

            <Button
              isIconOnly
              variant="light"
              aria-label="Notifications"
            >
              <Bell size={21} />
            </Button>

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

          </div>
        </header>

        {/* Dashboard Content */}
        <section className="p-6">

          {/* Welcome */}
          <div className="mb-7">
            <h1 className="text-2xl font-bold">
              Welcome back, Admin 👋
            </h1>

            <p className="text-gray-500 mt-1">
              Here's what's happening with your store today.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

            <StatCard
              title="Total Revenue"
              value="$24,580"
              change="+12.5%"
              icon={<DollarSign size={22} />}
            />

            <StatCard
              title="Total Orders"
              value="1,248"
              change="+8.2%"
              icon={<ShoppingCart size={22} />}
            />

            <StatCard
              title="Customers"
              value="856"
              change="+5.4%"
              icon={<UserRound size={22} />}
            />

            <StatCard
              title="Products"
              value="342"
              change="+3.1%"
              icon={<Box size={22} />}
              
            />

          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-6">

            {/* Sales */}
            <Card className="xl:col-span-2 shadow-sm">
              <CardBody className="p-6">

                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Sales Overview
                    </h3>

                    <p className="text-sm text-gray-500">
                      Sales performance this week
                    </p>
                  </div>

                  <Button size="sm" variant="flat">
                    This Week
                  </Button>
                </div>

                {/* Temporary chart area */}
                <div className="h-72 flex items-end gap-4">

                  {[40, 65, 50, 85, 60, 75, 95].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 flex flex-col justify-end items-center gap-2"
                      >
                        <div
                          className="w-full bg-black rounded-t-lg transition-all hover:bg-gray-700"
                          style={{
                            height: `${height}%`,
                          }}
                        />

                        <span className="text-xs text-gray-500">
                          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][
                            index
                          ]}
                        </span>
                      </div>
                    )
                  )}

                </div>

              </CardBody>
            </Card>

            {/* Recent Orders */}
            <Card className="shadow-sm">
              <CardBody className="p-6">

                <div className="flex justify-between items-center mb-5">
                  <h3 className="text-lg font-semibold">
                    Recent Orders
                  </h3>

                  <Button
                    size="sm"
                    variant="light"
                    endContent={<ChevronRight size={16} />}
                  >
                    View All
                  </Button>
                </div>

                <div className="space-y-5">

                  <Order
                    id="#ORD-1024"
                    customer="Ali Ahmed"
                    amount="$120"
                    status="Delivered"
                  />

                  <Order
                    id="#ORD-1023"
                    customer="John Smith"
                    amount="$85"
                    status="Processing"
                  />

                  <Order
                    id="#ORD-1022"
                    customer="Sarah Khan"
                    amount="$210"
                    status="Shipped"
                  />

                  <Order
                    id="#ORD-1021"
                    customer="David Lee"
                    amount="$65"
                    status="Pending"
                  />

                </div>

              </CardBody>
            </Card>

          </div>

        </section>
      </main>
    </div>
  );
};


const StatCard = ({ title, value, change, icon }) => {
  return (
    <Card className="shadow-sm">
      <CardBody className="p-5">

        <div className="flex justify-between items-start">

          <div>
            <p className="text-sm text-gray-500">
              {title}
            </p>

            <h2 className="text-2xl font-bold mt-2">
              {value}
            </h2>

            <p className="text-sm text-green-600 mt-2">
              {change} from last week
            </p>
          </div>

          <div className="p-3 bg-gray-100 rounded-xl">
            {icon}
          </div>

        </div>

      </CardBody>
    </Card>
  );
};


const Order = ({ id, customer, amount, status }) => {
  return (
    <div className="flex items-center justify-between">

      <div>
        <p className="font-medium text-sm">
          {id}
        </p>

        <p className="text-xs text-gray-500 mt-1">
          {customer}
        </p>
      </div>

      <div className="text-right">

        <p className="font-medium text-sm">
          {amount}
        </p>

        <Badge
          size="sm"
          variant="flat"
          className="mt-1"
        >
          {status}
        </Badge>

      </div>

    </div>
  );
};

export default AdminPanel;