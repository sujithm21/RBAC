import React from 'react';
import { Edit2, MoreVertical, Users, Shield } from 'lucide-react';

const roles = [
  {
    id: 1,
    name: 'Administrator',
    description: 'Full system access with all permissions',
    users: 3,
    permissions: 15,
  },
  {
    id: 2,
    name: 'Editor',
    description: 'Can edit and publish content',
    users: 8,
    permissions: 10,
  },
  {
    id: 3,
    name: 'Viewer',
    description: 'Read-only access to content',
    users: 12,
    permissions: 5,
  },
];

function RoleManagement() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role) => (
          <div
            key={role.id}
            className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/10 p-6 hover:bg-white/[0.15] transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">{role.name}</h3>
              <div className="flex space-x-2">
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/70 hover:text-white">
                  <Edit2 size={18} />
                </button>
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/70 hover:text-white">
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>
            <p className="text-white/70 mb-6">{role.description}</p>
            <div className="flex items-center justify-between text-white/70">
              <div className="flex items-center space-x-2">
                <Users size={18} />
                <span>{role.users} Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield size={18} />
                <span>{role.permissions} Permissions</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/10 p-6">
        <h3 className="text-xl font-bold text-white mb-6">Role Permissions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 border border-white/10"
            >
              <input
                type="checkbox"
                onChange={() => {}} // Add empty handler to prevent React warning
                className="w-4 h-4 rounded border-white/20 bg-white/5 checked:bg-purple-500 focus:ring-purple-500"
              />
              <span className="text-white">Permission {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoleManagement;