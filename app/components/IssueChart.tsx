"use client";

import { Box, Card, Heading } from "@radix-ui/themes";
import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  open: number;
  closed: number;
  inProgress: number;
}

const IssueChart = ({ open, inProgress, closed }: Props) => {
  const data = [
    { name: "Open", value: open },
    { name: "In Progress", value: inProgress },
    { name: "Closed", value: closed },
  ];

  return (
    <Card>
      <Box className="p-4 bg-gray-50">
        <Heading size="4">Issue Distribution</Heading>
      </Box>
      <Box className="p-4">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              axisLine={{ stroke: "#e5e7eb" }}
              tickLine={false}
              tick={{ fill: "#4b5563" }}
            />
            <YAxis
              axisLine={{ stroke: "#e5e7eb" }}
              tickLine={false}
              tick={{ fill: "#4b5563" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "0.375rem",
                boxShadow:
                  "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                border: "1px solid #e5e7eb",
              }}
              cursor={{ fill: "rgba(243, 244, 246, 0.6)" }}
            />
            <Legend wrapperStyle={{ paddingTop: "16px" }} />
            <Bar
              dataKey="value"
              radius={[4, 4, 0, 0]}
              fill="#3b82f6"
              name="Number of Issues"
              fillOpacity={0.9}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
};

export default IssueChart;
