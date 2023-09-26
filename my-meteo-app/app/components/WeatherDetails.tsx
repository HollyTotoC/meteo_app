"use client";

import { FiWind } from "react-icons/fi";

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

const WeatherDetails = ({ data }: WeatherDetailsProps) => {
    return (
        <>
            <div className="p-12">
                <h2 className="mb-4 text-2xl">Weather Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="flex p-4 items-center justify-center gap-6">
                        <div className="text-xl">
                            <h3>Windspeed</h3>
                            <h3>{data.current.wind_kph}&nbsp;kh</h3>
                        </div>
                        <div className="text-5xl">
                            <FiWind />
                        </div>
                    </div>
                    <div className="flex p-4 items-center justify-center gap-6">
                        <div className="text-xl">
                            <h3>Wind Direction</h3>
                            <h3>{data.current.wind_dir}</h3>
                        </div>
                        <div className="text-5xl">
                            <FiWind />
                        </div>
                    </div>
                    <div className="flex p-4 items-center justify-center gap-6">
                        <div className="text-xl">
                            <h3>Humidity</h3>
                            <h3>{data.current.humidity}&nbsp;%</h3>
                        </div>
                        <div className="text-5xl">
                            <FiWind />
                        </div>
                    </div>
                    <div className="flex p-4 items-center justify-center gap-6">
                        <div className="text-xl">
                            <h3>Air Pressure</h3>
                            <h3>{data.current.pressure_mb}</h3>
                        </div>
                        <div className="text-5xl">
                            <FiWind />
                        </div>
                    </div>
                    <div className="flex p-4 items-center justify-center gap-6">
                        <div className="text-xl">
                            <h3>Sunrise</h3>
                            <h3>
                                {data.forecast.forecastday[0].astro.sunrise}
                            </h3>
                        </div>
                        <div className="text-5xl">
                            <FiWind />
                        </div>
                    </div>
                    <div className="flex p-4 items-center justify-center gap-6">
                        <div className="text-xl">
                            <h3>Sunset</h3>
                            <h3>{data.forecast.forecastday[0].astro.sunset}</h3>
                        </div>
                        <div className="text-5xl">
                            <FiWind />
                        </div>
                    </div>
                    <div className="flex p-4 items-center justify-center gap-6">
                        <div className="text-xl">
                            <h3>Feels Like</h3>
                            <h3>{data.current.feelslike_c}&nbsp;°C</h3>
                        </div>
                        <div className="text-5xl">
                            <FiWind />
                        </div>
                    </div>
                    <div className="flex p-4 items-center justify-center gap-6">
                        <div className="text-xl">
                            <h3>Visibility</h3>
                            <h3>{data.current.vis_km}&nbsp;Km</h3>
                        </div>
                        <div className="text-5xl">
                            <FiWind />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WeatherDetails;
