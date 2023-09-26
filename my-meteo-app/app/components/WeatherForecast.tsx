"use client";
import Image from "next/image";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { FaTemperatureEmpty, FaTemperatureFull } from "react-icons/fa6";

interface WeatherForecastProps {
    data: {
        forecast?: {
            forecastday?: {
                date: string;
                day: {
                    condition: {
                        icon: string;
                        text: string;
                    };
                    maxtemp_c: number;
                    mintemp_c: number;
                };
            }[];
        };
    };
}

const WeatherForecast = ({ data }: WeatherForecastProps) => {
    return (
        <div className="grid grid-cols-2 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full ">
            {data && data.forecast && data.forecast.forecastday ? (
                data.forecast.forecastday.map((day, index) => {
                    console.log(day.day.condition.icon, "img");
                    const dayOfWeek = format(new Date(day.date), "eee", {
                        locale: fr,
                    });

                    return (
                        <div
                            key={index}
                            className="p-2 text-center flex flex-col items-center"
                        >
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
                    );
                })
            ) : (
                <p>No forecast data available.</p>
            )}
        </div>
    );
};

export default WeatherForecast;
