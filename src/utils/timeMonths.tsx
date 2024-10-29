import { useState, useEffect } from 'react';

// create function to measure time in years from a specific start date
export default function monthsElapsed() {
    const [months, setMonths] = useState(0);
    const startDate = new Date('2024-09-16');

    useEffect(() => {
        const currentDate = new Date();
        const timeElapsed = currentDate.getTime() - startDate.getTime();
        const monthsElapsed = Math.floor(timeElapsed / (1000 * 60 * 60 * 24 * 30));
        setMonths(monthsElapsed);
    }, []);

    return months;
}

