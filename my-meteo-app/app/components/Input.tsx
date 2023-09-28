"use client";
import { AiOutlineSearch } from "react-icons/ai";
import { TextField } from "ui-neumorphism";

import dynamic from "next/dynamic";

const DynamicTextField: typeof TextField = dynamic(
    () => import("ui-neumorphism").then((mod) => mod.TextField),
    {
        ssr: false,
    }
);

interface InputProps {
    handleSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    setLocation: React.Dispatch<React.SetStateAction<string>>;
    theme: "light" | "dark";
}

type TextFieldChangeEvent = {
    value: string;
    id: string;
    valid: boolean;
    event: React.SyntheticEvent<HTMLInputElement>;
    // Ajoutez d'autres propriétés si nécessaire
};

const Input: React.FC<InputProps> = ({ handleSearch, setLocation, theme }) => {
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
            <DynamicTextField
                type="text"
                className="w-full"
                inputStyles={{
                    padding: ".5rem",
                    width: "100%",
                    height: "100%",
                    minWidth: "100%",
                    paddingLeft: "1rem",
                    ...inputDynamicStyles,
                }}
                label="Looking for a city ?"
                onKeyDown={handleSearch}
                onChange={(e: TextFieldChangeEvent) => {
                    setLocation(e.value);
                }}
            ></DynamicTextField>
            <div className="ml-[-45px] cursor-pointer z-10">
                <AiOutlineSearch />
            </div>
        </form>
    );
};

export default Input;
