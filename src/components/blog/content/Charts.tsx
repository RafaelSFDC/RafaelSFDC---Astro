"use client";

import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart as ReLineChart,
  Line,
  PieChart as RePieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { cn } from "@/lib/utils";

// --- Types ---

interface BlogChartProps {
  data: any[];
  title?: string;
  description?: string;
  className?: string;
}

interface BarChartProps extends BlogChartProps {
  dataKeys: { key: string; color: string; name?: string }[];
  xAxisKey: string;
}

interface LineChartProps extends BlogChartProps {
  dataKeys: { key: string; color: string; name?: string }[];
  xAxisKey: string;
}

interface PieChartProps extends BlogChartProps {
  dataKey: string;
  nameKey: string;
  colors?: string[];
}

// --- Common Components ---

function ChartContainer({
  title,
  description,
  children,
  data = [],
  className,
}: {
  title?: string;
  description?: string;
  children: React.ReactNode;
  data: any[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "my-8 rounded-2xl border bg-background/50 p-6 shadow-sm backdrop-blur-sm",
        className,
      )}
    >
      {(title || description) && (
        <div className="mb-6 space-y-1">
          {title && (
            <h4 className="font-bold text-lg leading-tight">{title}</h4>
          )}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}

      {/* Visual Chart */}
      <div className="h-[350px] w-full">{children}</div>

      {/* SR-only / SEO Table */}
      <div className="sr-only">
        <table>
          <caption>{title || "Chart Data"}</caption>
          <thead>
            <tr>
              {Object.keys((data || [])[0] || {}).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(data || []).map((row, i) => (
              <tr key={i}>
                {Object.values(row || {}).map((val: any, j) => (
                  <td key={j}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-3 shadow-lg text-sm">
        <p className="font-semibold mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-muted-foreground">{entry.name}:</span>
            <span className="font-medium">
              {typeof entry.value === "number"
                ? new Intl.NumberFormat("pt-BR").format(entry.value)
                : entry.value}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// --- Chart Components ---

export function BlogBarChart({
  data,
  xAxisKey,
  dataKeys,
  title,
  description,
  className,
}: BarChartProps) {
  return (
    <ChartContainer
      title={title}
      description={description}
      data={data}
      className={className}
    >
      <ResponsiveContainer width="100%" height="100%">
        <ReBarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} vertical={false} />
          <XAxis
            dataKey={xAxisKey}
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            fontSize={12}
            tick={{ fill: "currentColor", opacity: 0.7 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            fontSize={12}
            tick={{ fill: "currentColor", opacity: 0.7 }}
            tickFormatter={(value) =>
              new Intl.NumberFormat("pt-BR", { notation: "compact" }).format(
                value,
              )
            }
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "var(--muted)", opacity: 0.2 }}
          />
          <Legend wrapperStyle={{ paddingTop: "20px" }} />
          {dataKeys?.map((item) => (
            <Bar
              key={item.key}
              dataKey={item.key}
              name={item.name || item.key}
              fill={item.color}
              radius={[4, 4, 0, 0]}
              animationDuration={1500}
            />
          ))}
        </ReBarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

export function BlogLineChart({
  data,
  xAxisKey,
  dataKeys,
  title,
  description,
  className,
}: LineChartProps) {
  return (
    <ChartContainer
      title={title}
      description={description}
      data={data}
      className={className}
    >
      <ResponsiveContainer width="100%" height="100%">
        <ReLineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} vertical={false} />
          <XAxis
            dataKey={xAxisKey}
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            fontSize={12}
            tick={{ fill: "currentColor", opacity: 0.7 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            fontSize={12}
            tick={{ fill: "currentColor", opacity: 0.7 }}
            tickFormatter={(value) =>
              new Intl.NumberFormat("pt-BR", { notation: "compact" }).format(
                value,
              )
            }
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ paddingTop: "20px" }} />
          {dataKeys?.map((item) => (
            <Line
              key={item.key}
              type="monotone"
              dataKey={item.key}
              name={item.name || item.key}
              stroke={item.color}
              strokeWidth={3}
              dot={{ r: 4, fill: item.color, strokeWidth: 0 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
              animationDuration={1500}
            />
          ))}
        </ReLineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

export function BlogPieChart({
  data,
  dataKey,
  nameKey,
  colors = ["#2563eb", "#7c3aed", "#db2777", "#ea580c", "#16a34a"], // default readable colors
  title,
  description,
  className,
}: PieChartProps) {
  return (
    <ChartContainer
      title={title}
      description={description}
      data={data}
      className={className}
    >
      <ResponsiveContainer width="100%" height="100%">
        <RePieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey={dataKey}
            nameKey={nameKey}
          >
            {(data || []).map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
                stroke="none"
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            layout="vertical"
            verticalAlign="middle"
            align="right"
            wrapperStyle={{ fontSize: "12px" }}
          />
        </RePieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
