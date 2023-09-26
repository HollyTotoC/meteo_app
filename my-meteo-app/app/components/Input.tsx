"use client";
import { AiOutlineSearch } from "react-icons/ai";

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
            <input
                type="text"
                placeholder="Looking for a city ?"
                className="w-full bg-transparent border-b-2 border-black placeholder-black"
                onKeyDown={handleSearch}
                onChange={(e) => setLocation(e.target.value)}
            />
            <div className="ml-[-25px] cursor-pointer ">
                <AiOutlineSearch />
            </div>
        </form>
    );
};

export default Input;
