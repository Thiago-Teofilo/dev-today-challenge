import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PopulationCount } from '../../../api/models';

interface BarChartProps {
    countries: PopulationCount[]
}


export function Chart(props: BarChartProps) {
  function formatYAxis(value: number) {
    if (value >= 1_000_000_000) {
      return `${(value / 1_000_000_000).toFixed(1)}B`;
    }
    if (value >= 1_000_000) {
      return `${(value / 1_000_000).toFixed(1)}M`; 
    }
    if (value >= 1_000) {
      return `${(value / 1_000).toFixed(1)}K`; 
    }
    return value.toString(); 
  };

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Population Over the Years</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={props.countries} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={formatYAxis} />          
          <Tooltip />
          <Legend />
          <Bar name='Population' dataKey="value" fill="#4CAF50" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
