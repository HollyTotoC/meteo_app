export const getCurrentDate = () => {
    const currentDate = new Date().toLocaleDateString("fr-FR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return currentDate;
};
