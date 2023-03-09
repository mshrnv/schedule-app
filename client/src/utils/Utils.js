export default  class Utils {
    static dateRange(startDate, endDate, steps = 1) {
        const dateArray = [];
        let currentDate = new Date(startDate);

        while (currentDate <= new Date(endDate)) {
            dateArray.push(new Date(currentDate));
            // Use UTC date to prevent problems with time zones and DST
            currentDate.setUTCDate(currentDate.getUTCDate() + steps);
        }

        const result = dateArray.map(item => item.toISOString().slice(0, 10));
        console.log(result)
        return result;
    }
}


