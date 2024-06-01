export function getCurrentISOTime() {

    // create a new date 
    const date = new Date();


    // get month , year day 
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    // get month , year day 


    // get utc hours , minutes and sec and pad 2 digit  

    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    // get utc hours , minutes and sec and pad 2 digit  


    // convert and return 
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
}
