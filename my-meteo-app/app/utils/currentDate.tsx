export const getCurrentDate = () => {
    const currentDate = new Date().toLocaleDateString("us-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return currentDate;
};
