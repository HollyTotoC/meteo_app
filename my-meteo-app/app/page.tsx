"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import ThemeProvider from "./utils/ThemeProvider";

import Input from "./components/Input";
import Current from "./components/Current";
import LikedCities from "./components/LikedCities";
import { Divider } from "ui-neumorphism";
import WeatherDetails from "./components/WeatherDetails";
import WeatherForecast from "./components/WeatherForecast";
import { useSearchParams, useRouter } from "next/navigation";

import { FaSun, FaMoon } from "react-icons/fa";

const Home = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [data, setData] = useState({});
    const searchParams = useSearchParams();
    const router = useRouter();
    const [location, setLocation] = useState(searchParams.get("loc") || "");
    const [error, setError] = useState("");
    const [likedCities, setLikedCities] = useState<string[]>([]);
    const [cookieChange, setCookieChange] = useState(0);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const handleSearch = async (
        e: React.KeyboardEvent<HTMLInputElement> | null,
        forcedLocation?: string
    ) => {
        const searchLocation = forcedLocation || location;
        if (!e || (e && e.key === "Enter" && searchLocation.trim() !== "")) {
            if (e) e.preventDefault();
            router.push(`/?loc=${searchLocation}`);
            const apiUrl = `/api/weatherSearch/route?location=${searchLocation}`;
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

    useEffect(() => {
        const savedCities = Cookies.get("likedCities")
            ? JSON.parse(Cookies.get("likedCities")!)
            : [];
        setLikedCities(savedCities);
    }, [cookieChange]);

    const handleUrl = async () => {
        if (searchParams.get("loc") !== null) {
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

    useEffect(() => {
        handleUrl();
    }, []);

    let content;
    if (Object.keys(data).length === 0 && error === "") {
        content = (
            <main
                className={`flex flex-col items-center justify-center h-screen mt-[-194px] md:mt-[-96px] ${
                    theme === "dark" ? "!text-white" : ""
                }`}
            >
                <h2 className="text-3xl font-bold mb-4 px-12 text-center">
                    Welcome to Weather App
                </h2>
                <p className="text-xl px-12 text-center">
                    Enter a city name to get a weather forecast
                </p>
            </main>
        );
    } else if (error !== "") {
        content = (
            <main
                className={`flex flex-col items-center justify-center h-screen mt-[-194px] md:mt-[-96px] ${
                    theme === "dark" ? "!text-white" : ""
                }`}
            >
                <p>
                    <span className="text-3xl font-bold mb-4 px-12 text-center">
                        Can&apos;t find the city you&apos;re talking about...{" "}
                    </span>
                    <br />
                    <span className="text-xl px-12 text-center">
                        Try with an other one
                    </span>
                </p>
            </main>
        );
    } else {
        content = (
            <main className="pb-12 flex flex-col flex-1">
                <div className="flex flex-col lg:flex-row p-6 md:p-12 items-stretch justify-between gap-16">
                    <Current
                        theme={theme}
                        data={data}
                        setCookieChange={setCookieChange}
                    />
                    <WeatherForecast theme={theme} data={data} />
                </div>
                <div className="">
                    <WeatherDetails theme={theme} data={data} />
                </div>
            </main>
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <main
                className={`bg-cover h-fit ${
                    theme === "dark"
                        ? "bg-gradient-to-br from-neutral-700 to-neutral-900 text-white"
                        : "bg-gradient-to-br from-neutral-100 to-neutral-300 text-black"
                } `}
            >
                <div className="  w-full">
                    {/* Input & Logo */}
                    <header className="flex flex-col-reverse md:flex-row justify-between items-center px-12 py-4 md:py-6">
                        <Input
                            theme={theme}
                            handleSearch={handleSearch}
                            setLocation={setLocation}
                        />
                        <button
                            onClick={toggleTheme}
                            className="order-1 hover:cursor-pointer"
                        >
                            <h1 className="flex items-center gap-2 mb-4 md:mb-0 py-2 px-4 text-2xl md:text-lg font-bold">
                                {theme === "dark" ? (
                                    <FaMoon className="text-neutral-300" />
                                ) : (
                                    <FaSun className="text-neutral-600" />
                                )}
                                Weather App
                            </h1>
                        </button>
                    </header>
                    <Divider />
                    <LikedCities
                        theme={theme}
                        likedCities={likedCities}
                        setLocation={setLocation}
                        handleSearch={handleSearch}
                    />
                    {content}
                </div>
            </main>
        </ThemeProvider>
    );
};

export default Home;
