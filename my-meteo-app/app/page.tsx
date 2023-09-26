"use client";

import React, { useState } from "react";
import axios from "axios";

import Input from "./components/Input";
import Current from "./components/Current";
import WeatherDetails from "./components/WeatherDetails";
import WeatherForecast from "./components/WeatherForecast";

const Home = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState("");
    const [error, setError] = useState("");

    const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && location.trim() !== "") {
            e.preventDefault();
            const apiUrl = `/api/weatherSearch/route?location=${location}`;
            try {
                const res = await axios.get(apiUrl);
                if (res.status !== 200) {
                    throw new Error();
                }
                setData(res.data);
                setLocation("");
                setError("");
            } catch (error) {
                setError("City not found");
                setData({});
            }
        }
    };

    let content;
    if (Object.keys(data).length === 0 && error === "") {
        content = (
            <div className="flex flex-col items-center justify-center h-screen mt-[-194px] md:mt-[-136px]">
                <h2 className="text-3xl font-bold mb-4 px-12 text-center">
                    Welcome to Weather App
                </h2>
                <p className="text-xl px-12 text-center">
                    Enter a city name to get a weather forecast
                </p>
            </div>
        );
    } else if (error !== "") {
        content = (
            <div className="flex flex-col items-center justify-center h-screen mt-[-194px] md:mt-[-136px]">
                <p>
                    <span className="text-3xl font-bold mb-4 px-12 text-center">
                        Can&apos;t find the city you&apos;re talking about...{" "}
                    </span>
                    <br />
                    <span className="text-xl px-12 text-center">
                        Try with an other one
                    </span>
                </p>
            </div>
        );
    } else {
        content = (
            <div className="min-h-screen mt-[-194px] md:mt-[-136px] pt-[194px] md:pt-[136px]">
                <div className="flex flex-col md:flex-row p-12 items-center justify-between">
                    <Current data={data} />
                    <WeatherForecast data={data} />
                </div>
                <div>
                    <WeatherDetails data={data} />
                </div>
            </div>
        );
    }

    console.log(location, data);

    return (
        <main className="bg-cover h-fit bg-gradient-to-br from-neutral-100 to-neutral-300">
            <div className="  w-full">
                {/* Input & Logo */}
                <div className="flex flex-col md:flex-row justify-between items-center p-12">
                    <Input
                        handleSearch={handleSearch}
                        setLocation={setLocation}
                    />
                    <h1 className="mb-8 md:mb-0 order-1 py-2 px-4 font-bold">
                        Weather App
                    </h1>
                </div>
                {content}
            </div>
        </main>
    );
};

export default Home;
