"use client";
import { WeatherData } from "../type";
import Image from "next/image";
import { Card, CardContent } from "ui-neumorphism";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { FaTemperatureEmpty, FaTemperatureFull } from "react-icons/fa6";
import { Divider } from "ui-neumorphism";

interface WeatherForecastProps {
    data: WeatherData;
    theme: "light" | "dark";
}

const WeatherForecast = ({ data, theme }: WeatherForecastProps) => {
    return (
        <Card inset className="grow flex justify-center items-center">
            <CardContent className="grow grid grid-cols-2 sm:grid-col-2 md:grid-cols-3 gap-2 lg:grid-cols-5">
                <h2 className="hidden">Forecast</h2>
                {data && data.forecast && data.forecast.forecastday ? (
                    data.forecast.forecastday.map((day, index) => {
                        const dayOfWeek = format(new Date(day.date), "eee", {
                            locale: fr,
                        });

                        return (
                            <div
                                key={index}
                                className={`grow flex flex-col ${
                                    theme === "dark" ? "!text-white" : ""
                                }`}
                            >
                                <div className="p-2 text-center flex flex-col items-center">
                                    <p>{dayOfWeek}</p>
                                    <Image
                                        src={`https:${day.day.condition.icon}`}
                                        alt={day.day.condition.text}
                                        width={50}
                                        height={50}
                                        className="w-[50px] object-cover"
                                    />
                                    <div className="flex flex-row items-center">
                                        <FaTemperatureFull className="text-red-400" />
                                        <p>{day.day.maxtemp_c}°C</p>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <FaTemperatureEmpty className="text-blue-400" />
                                        <p>{day.day.mintemp_c}°C</p>
                                    </div>
                                </div>
                                <Divider className=" inline-block lg:hidden w-1/3 self-center" />
                            </div>
                        );
                    })
                ) : (
                    <p>No forecast data available.</p>
                )}
            </CardContent>
        </Card>
    );
};

export default WeatherForecast;
