"use client"

import { useState, useEffect } from "react"
import { io, type Socket } from "socket.io-client"
import { format } from "date-fns"

import Chart from "./chart"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { ChartDataPoint, SensorData } from "@/lib/types/types"

const SensorDataChart = () => {
    const [sensorData, setSensorData] = useState<SensorData | null>(null)
    const [historicalData, setHistoricalData] = useState<ChartDataPoint[]>([])
    const [isConnected, setIsConnected] = useState(false)
    const [socket, setSocket] = useState<Socket | null>(null)
    const [connectionStatus, setConnectionStatus] = useState("Connecting...")

    // Maximum number of data points to keep
    const MAX_DATA_POINTS = process.env.MAX_DATA_POINTS || 20
    const RECONNECT_PERIODICITY = Number(process.env.RECONNECT_PERIODICITY) || 5000

    useEffect(() => {
        let newSocket: Socket | null = null
        const backendUrl = process.env.BACKEND_URL || "http://localhost:5000"
        // Initialize the Socket.IO client
        try {
            newSocket = io(backendUrl, {
                transports: ["websocket", "polling"],
                reconnection: true,
                reconnectionAttempts: Number.POSITIVE_INFINITY,
                reconnectionDelay: RECONNECT_PERIODICITY,
                reconnectionDelayMax: RECONNECT_PERIODICITY,
                timeout: RECONNECT_PERIODICITY,
            })
            setSocket(newSocket)
            newSocket.on("connect", () => {
                setIsConnected(true)
                setConnectionStatus("Connected")
            })

            newSocket.on("disconnect", () => {
                setIsConnected(false)
                setConnectionStatus("Disconnected")
            })

            newSocket.on("connection-success", (data) => {
            })

            newSocket.on("get-sensor-data-simulated", (data: SensorData) => {
                setSensorData(data)
                // Add new data point to historical data
                const timestamp = new Date(data.timestamp)
                const formattedTime = format(timestamp, "HH:mm:ss")

                const newDataPoint: ChartDataPoint = {
                    time: formattedTime,
                    temperature: Number.parseFloat(data.temperature),
                    humidity: Number.parseFloat(data.humidity),
                    pressure: Number.parseFloat(data.pressure),
                }

                setHistoricalData((prevData) => {
                    const newData = [...prevData, newDataPoint]
                    // Keep only the last MAX_DATA_POINTS data points
                    const trimmedData = newData.slice(-MAX_DATA_POINTS)
                    // Calculate trend for temperature
                    return trimmedData
                })
            })

            newSocket.on("connect_error", (error) => {
                setConnectionStatus("Connection failed")
                // Attempt to reconnect
                setTimeout(() => {
                    if (newSocket) {
                        try {
                            newSocket.connect()
                        } catch (error) {
                            console.error("Error connecting to server:", error)
                        }
                    }
                }, RECONNECT_PERIODICITY)
            })
        } catch (error) {
            console.error("Error connecting to server:", error)
        }


        return () => {
            if (newSocket) {
                newSocket.disconnect()
            }
        }
    }, [])

    const getCurrentTime = () => {
        return format(new Date(), "MMMM d, yyyy HH:mm")
    }

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                    <CardTitle>Sensor Data Monitor</CardTitle>
                    <CardDescription>{getCurrentTime()}</CardDescription>
                </div>
                <Badge
                    variant={isConnected ? "outline" : "destructive"}
                    className={isConnected ? "bg-green-500/10 text-green-500 hover:bg-green-500/20" : ""}
                >
                    {connectionStatus}
                </Badge>
            </CardHeader>
            <CardContent>
                {isConnected && historicalData.length > 0 ? (
                    <Chart historicalData={historicalData} />
                ) : (
                    <div className="flex justify-center items-center h-[300px]">
                        <p className="text-gray-500">Waiting for data...</p>
                    </div>
                )}
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            {sensorData
                                ? <SensorReadingsFooter {...sensorData} />
                                : "Waiting for data..."}
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}

const SensorReadingsFooter = ({ temperature, humidity, pressure, timestamp }: SensorData) => {
    return (
        <div className="w-full rounded-md border p-3">
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">Current Readings</h3>
            <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#d94545]"></div>
                    <span className="font-medium">{temperature}°C</span>
                    <span className="text-xs text-muted-foreground">Temperature</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#1890ff]"></div>
                    <span className="font-medium">{humidity}%</span>
                    <span className="text-xs text-muted-foreground">Humidity</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#52c41a]"></div>
                    <span className="font-medium">{pressure} hPa</span>
                    <span className="text-xs text-muted-foreground">Pressure</span>
                </div>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">Last updated: {format(new Date(timestamp), "HH:mm:ss")}</div>
        </div>
    )
}

export default SensorDataChart