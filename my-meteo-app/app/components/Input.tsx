"use client";
import { AiOutlineSearch } from "react-icons/ai";

import dynamic from "next/dynamic";

const TextField = dynamic(
    () => import("ui-neumorphism").then((mod) => mod.TextField),
    {
        ssr: false,
    }
);

interface InputProps {
    handleSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ handleSearch, setLocation }: InputProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent form submission
    };

    return (
        <form
            className="flex items-center md:w-2/4 w-full md:order-1"
            onSubmit={handleSubmit}
        >
            <TextField
                type="text"
                className="w-full"
                inputStyles={{
                    padding: ".5rem",
                    width: "100%",
                    height: "100%",
                    minWidth: "100%",
                }}
                label="Looking for a city ?"
                onKeyDown={handleSearch}
                onChange={(e) => {
                    setLocation(e.value);
                }}
            ></TextField>
            {/* <input
                type="text"
                placeholder="Looking for a city ?"
                className="w-full bg-transparent border-b-2 border-black placeholder-black pl-2"
                onKeyDown={handleSearch}
                onChange={(e) => setLocation(e.target.value)}
            /> */}
            <div className="ml-[-45px] cursor-pointer z-10">
                <AiOutlineSearch />
            </div>
        </form>
    );
};

export default Input;
