"use client";

import {
    FiWind,
    FiCompass,
    FiDroplet,
    FiSunrise,
    FiSunset,
    FiThermometer,
} from "react-icons/fi";
import { BsSpeedometer2 } from "react-icons/bs";
import { MdOutlineVisibility } from "react-icons/md";
import { Card, CardContent } from "ui-neumorphism";

interface WeatherDetailsProps {
    data: {
        current: {
            wind_kph: number;
            wind_dir: string;
            humidity: number;
            pressure_mb: number;
            feelslike_c: number;
            vis_km: number;
        };
        forecast: {
            forecastday: [
                {
                    astro: {
                        sunrise: string;
                        sunset: string;
                    };
                }
            ];
        };
    };
}

const ICONS = {
    FiWind: FiWind,
    FiCompass: FiCompass,
    FiDroplet: FiDroplet,
    FiSunrise: FiSunrise,
    FiSunset: FiSunset,
    FiThermometer: FiThermometer,
    BsSpeedometer2: BsSpeedometer2,
    MdOutlineVisibility: MdOutlineVisibility,
};

const WeatherDetails = ({ data, theme }: WeatherDetailsProps) => {
    const details = [
        {
            title: "Windspeed",
            value: `${data.current.wind_kph}\u00A0kh`,
            icon: "FiWind",
        },
        {
            title: "Wind Dir",
            value: data.current.wind_dir,
            icon: "FiCompass",
        },
        {
            title: "Humidity",
            value: `${data.current.humidity}\u00A0%`,
            icon: "FiDroplet",
        },
        {
            title: "Air Pressure",
            value: `${data.current.pressure_mb}\u00A0mb`,
            icon: "BsSpeedometer2",
        },
        {
            title: "Sunrise",
            value: data.forecast.forecastday[0].astro.sunrise,
            icon: "FiSunrise",
        },
        {
            title: "Sunset",
            value: data.forecast.forecastday[0].astro.sunset,
            icon: "FiSunset",
        },
        {
            title: "Feels Like",
            value: `${data.current.feelslike_c}\u00A0°C`,
            icon: "FiThermometer",
        },
        {
            title: "Visibility",
            value: `${data.current.vis_km}\u00A0Km`,
            icon: "MdOutlineVisibility",
        },
    ];

    return (
        <div className="px-6 md:px-12 py-4">
            <Card inset className="flex flex-col">
                <CardContent>
                    <h2
                        className={`mb-6 text-2xl font-bold ${
                            theme === "dark" ? "!text-white" : ""
                        }`}
                    >
                        Weather Details
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {details.map((detail, index) => {
                            const IconComponent = ICONS[detail.icon];
                            return (
                                <Card
                                    key={index}
                                    elevation={1}
                                    className="grow flex items-center"
                                >
                                    <CardContent className="flex items-center justify-between w-full">
                                        <div className=" text-lg">
                                            <h3
                                                className={`font-semibold ${
                                                    theme === "dark"
                                                        ? "text-neutral-300"
                                                        : "text-neutral-600"
                                                } `}
                                            >
                                                {detail.title}
                                            </h3>
                                            <h4
                                                className={`${
                                                    theme === "dark"
                                                        ? "!text-white"
                                                        : ""
                                                }`}
                                            >
                                                {detail.value}
                                            </h4>
                                        </div>
                                        <div>
                                            <IconComponent
                                                className={`text-3xl ${
                                                    theme === "dark"
                                                        ? "text-neutral-400"
                                                        : "text-neutral-600"
                                                }`}
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default WeatherDetails;
