
import greet, { getCurrentDate, getCurrentTime, daysBetween } from "./dateutils.js";

import { APP_NAME, DATE_FORMATS } from "./constant.js";

console.log(greet());
console.log(`Current US Date: ${getCurrentDate(DATE_FORMATS.US)}`); 
console.log(`Current UK Date: ${getCurrentDate(DATE_FORMATS.UK)}`); 
console.log(`Current ISO Date: ${getCurrentDate(DATE_FORMATS.ISO)}`);
console.log(`Current Time: ${getCurrentTime()}`); 
console.log(`Days between 2025-01-01 and 2025-03-17: ${daysBetween("2025-01-01", "2025-03-17")}`); 

console.log(`App Name: ${APP_NAME}`); 

