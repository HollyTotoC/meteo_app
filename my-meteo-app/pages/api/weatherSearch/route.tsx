import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const location = req.query.location as string;
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}&days=10&aqi=yes&alerts=yes`;

    try {
        const apiRes = await axios.get(url);

        if (apiRes.status !== 200) {
            throw new Error();
        }

        res.status(200).json(apiRes.data);
    } catch (err) {
        res.status(500).json({ error: "City not found" });
    }
}
