
export function time(isoDate) {

    // create a new date 
    const date = new Date(isoDate);

    // get month , year day 
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    // get month , year day 

    //  convert time 
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    //  convert time and return
    return `${day}/${month}/${year} (${hours}:${minutes} ${ampm})`;
}
