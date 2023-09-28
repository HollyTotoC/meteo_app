"use client";
import { AiOutlineSearch } from "react-icons/ai";

import dynamic from "next/dynamic";
import { TextField } from "ui-neumorphism";

interface InputProps {
    handleSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    setLocation: React.Dispatch<React.SetStateAction<string>>;
    theme: "light" | "dark";
}

const Input = ({ handleSearch, setLocation, theme }: InputProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent form submission
    };
    const inputDynamicStyles =
        theme === "dark" ? { color: "white" } : { color: "black" };
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
                    "padding-left": "1rem",
                    ...inputDynamicStyles,
                }}
                label="Looking for a city ?"
                onKeyDown={handleSearch}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setLocation(e.target.value);
                }}
            ></TextField>
            <div className="ml-[-45px] cursor-pointer z-10">
                <AiOutlineSearch />
            </div>
        </form>
    );
};

export default Input;
