export type WeatherData = {
    current: {
        condition: {
            icon: string;
            text: string;
        };
        wind_kph: number;
        wind_dir: string;
        humidity: number;
        pressure_mb: number;
        feelslike_c: number;
        vis_km: number;
        temp_c: number;
    };
    location: {
        name: string;
        region: string;
    };
    forecast: {
        forecastday: [
            {
                date: string;
                day: {
                    condition: {
                        icon: string;
                        text: string;
                    };
                    maxtemp_c: number;
                    mintemp_c: number;
                };
                astro: {
                    sunrise: string;
                    sunset: string;
                };
            }
        ];
    };
};
