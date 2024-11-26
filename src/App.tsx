import React, { useState } from 'react';
import { Users, Shield, Key, Menu, X, Plus, Search } from 'lucide-react';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import PermissionManagement from './components/PermissionManagement';

function App() {
  const [activeTab, setActiveTab] = useState('users');
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const tabs = [
    { id: 'users', name: 'Users', icon: Users },
    { id: 'roles', name: 'Roles', icon: Shield },
    { id: 'permissions', name: 'Permissions', icon: Key },
  ];

  const handleAddNew = () => {
    switch (activeTab) {
      case 'users':
        // UserManagement component handles this internally
        break;
      case 'roles':
        // TODO: Implement role creation
        break;
      case 'permissions':
        // TODO: Implement permission creation
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white/10 backdrop-blur-xl w-64 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } z-30`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              RBAC Admin
            </h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white hover:text-purple-200 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white/20 text-white'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        {/* Top Bar */}
        <div className="bg-white/10 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center justify-between p-4">
            {!isSidebarOpen && (
              <button
                onClick={() => setSidebarOpen(true)}
                className="text-white hover:text-purple-200 transition-colors"
              >
                <Menu size={24} />
              </button>
            )}
            <div className="flex-1 max-w-xl mx-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
              </div>
            </div>
            <button
              onClick={handleAddNew}
              className="flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Plus size={20} />
              <span>Add New</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {activeTab === 'users' && <UserManagement />}
          {activeTab === 'roles' && <RoleManagement />}
          {activeTab === 'permissions' && <PermissionManagement />}
        </div>
      </div>
    </div>
  );
}

export default App;