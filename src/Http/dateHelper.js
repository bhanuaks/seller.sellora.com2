export function formatDateTime(dateString) {
    const date = new Date(dateString);
    
    if (isNaN(date.getTime())) return "Invalid Date";

    return new Intl.DateTimeFormat("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata"  // Change this based on your preferred timezone
    }).format(date);
}

export function formatDate(dateString) {
    const date = new Date(dateString);
    
    if (isNaN(date.getTime())) return "Invalid Date";

    return new Intl.DateTimeFormat("en-US", {
        day: "2-digit",
        month: "long",  
        year: "numeric",
        timeZone: "Asia/Kolkata"
    }).format(new Date(date.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })));
}