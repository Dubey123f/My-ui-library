// src/components/Chart.tsx
import React from 'react';

interface DataPoint {
  month: string;
  value: number;
}

interface ChartProps {
  data: DataPoint[];
  title: string;
  height?: string;
}

const Chart: React.FC<ChartProps> = ({ data, title, height = 'h-64' }) => {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">{title}</h2>
      <div className={`${height} relative`}>
        <div className="flex items-end h-full space-x-2">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center"
            >
              <div
                className="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-all duration-300"
                style={{
                  height: `${(item.value / maxValue) * 100}%`,
                }}
              ></div>
              <div className="text-xs text-gray-500 mt-2">{item.month}</div>
              <div className="text-xs font-semibold">${item.value}</div>
            </div>
          ))}
        </div>
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="text-xs text-gray-400">
              ${Math.round((maxValue * (4 - i)) / 4)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chart;