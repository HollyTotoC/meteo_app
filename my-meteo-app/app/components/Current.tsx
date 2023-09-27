"use client";
import React from "react";

import { getCurrentDate } from "../utils/currentDate";
import { IoLocationSharp } from "react-icons/io5";
import Image from "next/image";
import { Card, CardContent, Divider } from "ui-neumorphism";

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
        <Card
            elevation={3}
            className="flex flex-col mb-0 items-start gap-2 grow-0"
        >
            <CardContent className="flex flex-col md:flex-row lg:flex-col gap-12 lg:gap-4 self-center">
                <div className="flex flex-col-reverse items-center justify-center">
                    {weatherIcon && (
                        <Card inset className="!rounded-full">
                            <CardContent className="!rounded-full">
                                <Image
                                    src={`https:${weatherIcon}`}
                                    alt={data.current.condition.text}
                                    width={100}
                                    height={100}
                                    className="object-cover"
                                />
                            </CardContent>
                        </Card>
                    )}
                </div>
                <div className="">
                    <div className="flex flex-col gap-1 my-2">
                        <h1 className="text-3xl">Today</h1>
                        <p>{currentDate}</p>
                        <Divider />
                    </div>
                    <div>
                        <p className="text-5xl">{data.current.temp_c}°C</p>
                        <span>{data.current.condition.text}</span>
                    </div>
                    <div>
                        {data.location ? (
                            <div className="flex items-center rounded-xl">
                                <IoLocationSharp />
                                <span>
                                    {data.location.name}, {data.location.region}
                                </span>
                            </div>
                        ) : null}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default Current;
