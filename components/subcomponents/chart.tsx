import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartDataPoint } from "@/lib/types/types"

const chartConfig = {
    temperature: {
        label: "Temperature (°C)",
        color: "hsl(var(--chart-1))",
    },
    humidity: {
        label: "Humidity (%)",
        color: "hsl(var(--chart-2))",
    },
    pressure: {
        label: "Pressure (hPa)",
        color: "hsl(var(--chart-3))",
    },
} satisfies ChartConfig



export default function Chart({ historicalData }: { historicalData: ChartDataPoint[] }) {
    return (
        <ChartContainer config={chartConfig}>
            <LineChart
                accessibilityLayer
                data={historicalData}
                margin={{
                    top: 20,
                    left: 20,
                    right: 20,
                    bottom: 10,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" tickLine={false} axisLine={true} tickMargin={8} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Line
                    dataKey="temperature"
                    type="monotone"
                    stroke="#ff4d4f"
                    strokeWidth={3}
                    activeDot={{ r: 8 }}
                    isAnimationActive={false}
                />
                <Line
                    dataKey="humidity"
                    type="monotone"
                    stroke="#1890ff"
                    strokeWidth={3}
                    activeDot={{ r: 8 }}
                    isAnimationActive={false}
                />
                <Line
                    dataKey="pressure"
                    type="monotone"
                    stroke="#52c41a"
                    strokeWidth={3}
                    activeDot={{ r: 8 }}
                    isAnimationActive={false}
                />
            </LineChart>
        </ChartContainer>
    )
}