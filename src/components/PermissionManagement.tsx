import React from 'react';
import { Lock, Unlock, Shield, Users, Database, Settings } from 'lucide-react';

const permissionGroups = [
  {
    id: 1,
    name: 'User Management',
    icon: Users,
    permissions: [
      { id: 1, name: 'Create Users', granted: true },
      { id: 2, name: 'Edit Users', granted: true },
      { id: 3, name: 'Delete Users', granted: false },
      { id: 4, name: 'View Users', granted: true },
    ],
  },
  {
    id: 2,
    name: 'Content Management',
    icon: Database,
    permissions: [
      { id: 5, name: 'Create Content', granted: true },
      { id: 6, name: 'Edit Content', granted: true },
      { id: 7, name: 'Delete Content', granted: false },
      { id: 8, name: 'Publish Content', granted: true },
    ],
  },
  {
    id: 3,
    name: 'System Settings',
    icon: Settings,
    permissions: [
      { id: 9, name: 'Manage Settings', granted: false },
      { id: 10, name: 'View Logs', granted: true },
      { id: 11, name: 'Backup Data', granted: false },
      { id: 12, name: 'Restore Data', granted: false },
    ],
  },
];

function PermissionManagement() {
  return (
    <div className="space-y-6">
      {permissionGroups.map((group) => {
        const Icon = group.icon;
        return (
          <div
            key={group.id}
            className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden"
          >
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <Icon className="text-purple-300" size={24} />
                <h3 className="text-xl font-bold text-white">{group.name}</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.permissions.map((permission) => (
                  <div
                    key={permission.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10"
                  >
                    <div className="flex items-center space-x-3">
                      {permission.granted ? (
                        <Unlock className="text-green-300" size={18} />
                      ) : (
                        <Lock className="text-red-300" size={18} />
                      )}
                      <span className="text-white">{permission.name}</span>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={permission.granted}
                        onChange={() => {}} // Add empty handler to prevent React warning
                        className="w-10 h-5 rounded-full bg-white/5 border border-white/10 checked:bg-purple-500 focus:ring-purple-500 appearance-none cursor-pointer transition-colors"
                        style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                      />
                      <div
                        className={`absolute left-0.5 top-0.5 w-4 h-4 rounded-full transition-transform transform ${
                          permission.granted ? 'translate-x-5 bg-white' : 'bg-white/50'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PermissionManagement;