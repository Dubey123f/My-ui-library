// src/components/Stats.tsx
import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  change?: number;
  color?: 'blue' | 'green' | 'purple' | 'red';
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  change,
  color = 'blue',
}) => {
  const colorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    red: 'text-red-600',
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
        {icon && <span className={`${colorClasses[color as keyof typeof colorClasses]} text-2xl`}>{icon}</span>}
      </div>
      <div className="flex items-baseline">
        <p className={`text-3xl font-bold ${colorClasses[color]}`}>{value}</p>
        {change !== undefined && (
          <span className={`ml-2 text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
          </span>
        )}
      </div>
    </div>
  );
};

interface StatsGridProps {
  stats: {
    title: string;
    value: string | number;
    icon?: React.ReactNode;
    change?: number;
    color?: 'blue' | 'green' | 'purple' | 'red';
  }[];
}

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsGrid;