
import { DATE_FORMATS } from "./constant.js"; 

export function getCurrentDate(format = DATE_FORMATS.DEFAULT) {
    const now = new Date();

    switch (format) {
        case DATE_FORMATS.US:
            return now.toLocaleDateString("en-US");
        case DATE_FORMATS.UK:
            return now.toLocaleDateString("en-GB"); 
        case DATE_FORMATS.ISO:
            return now.toISOString().split("T")[0]; 
        default:
            return now.toDateString(); 
    }
}

export function getCurrentTime() {
    return new Date().toLocaleTimeString();
}

export function daysBetween(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2 - d1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
}

export default function greet() {
    return `Hello! Today's date is ${getCurrentDate()}.`;
}
