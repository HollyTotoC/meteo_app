"use client";
import React from "react";

import { getCurrentDate } from "../utils/currentDate";
import { IoLocationSharp } from "react-icons/io5";

interface CurrentProps {
    data: {
        current: {
            condition: {
                icon: string;
                text: string;
            };
            temp_c: number;
        };
        location: {
            name: string;
            region: string;
        };
    };
}

const Current = ({ data }: CurrentProps) => {
    const currentDate = getCurrentDate();
    const weatherIcon = data.current.condition.icon;
    return (
        <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2">
            <div className="flex items-center">
                <div>
                    <h1 className="text-3xl">Today</h1>
                    <p>{currentDate}</p>
                </div>
                {weatherIcon && (
                    <div>
                        <img
                            src={weatherIcon}
                            alt={data.current.condition.text}
                            className="w-[50px] object-cover"
                        />
                    </div>
                )}
            </div>
            <div>
                <p className="text-5xl">{data.current.temp_c}°C</p>
                <span>{data.current.condition.text}</span>
            </div>
            <div>
                {data.location ? (
                    <div className="flex items-center p-2 rounded-xl">
                        <IoLocationSharp />
                        <span>
                            {data.location.name}, {data.location.region}
                        </span>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Current;
