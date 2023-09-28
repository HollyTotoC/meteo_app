import axios from "axios";

export const fetchWeatherData = async (location: string) => {
    const apiUrl = `/api/weatherSearch/route?location=${location}`;
    try {
        const res = await axios.get(apiUrl);
        if (res.status !== 200) {
            throw new Error(`API responded with status: ${res.status}`);
        }
        return { data: res.data, error: null };
    } catch (error) {
        const err = error as Error;
        return { data: null, error: err.message || "An error occurred" };
    }
};
