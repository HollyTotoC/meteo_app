"use client";

import { Button } from "ui-neumorphism";
import { AiFillStar } from "react-icons/ai";
import { useSearchParams } from "next/navigation";

interface LikedCitiesProps {
    likedCities: string[];
    setLocation: any;
    handleSearch: any;
    theme: "light" | "dark";
}

const LikedCities = ({
    likedCities,
    setLocation,
    handleSearch,
    theme,
}: LikedCitiesProps) => {
    const searchParams = useSearchParams();
    if (!likedCities || likedCities.length === 0) {
        return null;
    }

    return (
        <div className="flex justify-start items-stretch flex-wrap gap-4 px-6 md:px-12 py-2">
            <AiFillStar className="text-neutral-400 text-3xl" />
            {likedCities.map((city, index) => {
                return (
                    <div key={index}>
                        <Button
                            className={`${
                                theme === "dark" ? "!text-white" : "!text-black"
                            }`}
                            onClick={() => {
                                setLocation(city);
                                handleSearch(null, city);
                            }}
                            active={searchParams?.get("loc") === city}
                            rounded
                            depressed
                        >
                            {city}
                        </Button>
                    </div>
                );
            })}
        </div>
    );
};

export default LikedCities;
