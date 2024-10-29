// create a function to calculate time elapsed since start of coding, and update the time coding box with the new values

import { useState, useEffect } from 'react';

// create function to measure time in years from a specific start date
export default function useTimeElapsed() {
    const [years, setYears] = useState(0);
    const startDate = new Date('2024-09-16');

    useEffect(() => {
        const currentDate = new Date();
        const timeElapsed = currentDate.getTime() - startDate.getTime();
        const yearsElapsed = Math.floor(timeElapsed / (1000 * 60 * 60 * 24 * 365));
        setYears(yearsElapsed);
    }, []);

    return years;
}

