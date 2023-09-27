"use client";
import Cookies from "js-cookie";
import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

interface LikeButtonProps {
    location: string;
    setCookieChange: React.Dispatch<React.SetStateAction<number>>;
}

const LikeButton: React.FC<LikeButtonProps> = ({
    location,
    setCookieChange,
}) => {
    const [liked, setLiked] = React.useState<boolean>(false);

    React.useEffect(() => {
        const savedCities = Cookies.get("likedCities")
            ? JSON.parse(Cookies.get("likedCities")!)
            : [];
        setLiked(savedCities.includes(location));
    }, [location]);

    const handleLike = () => {
        const savedCities = Cookies.get("likedCities")
            ? JSON.parse(Cookies.get("likedCities")!)
            : [];

        if (liked) {
            const index = savedCities.indexOf(location);
            if (index > -1) {
                savedCities.splice(index, 1);
            }
        } else {
            savedCities.push(location);
        }

        Cookies.set("likedCities", JSON.stringify(savedCities));
        setCookieChange((prev) => prev + 1);
        setLiked(!liked);
    };

    return (
        <button
            onClick={handleLike}
            className="group text-3xl absolute top-2 right-1 text-neutral-500"
        >
            {liked ? (
                <>
                    <AiFillStar className="block group-hover:hidden text-yellow-500" />
                    <AiOutlineStar className="hidden group-hover:block" />
                </>
            ) : (
                <>
                    <AiOutlineStar className="block group-hover:hidden" />
                    <AiFillStar className="hidden group-hover:block text-yellow-500" />
                </>
            )}
        </button>
    );
};

export default LikeButton;
