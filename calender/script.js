// Sample data to simulate challenge completion
const challengeData = {
    "2024-10-20": true, // Completed
    "2024-10-21": false, // Missed
    // Add more dates as needed
};

function createCalendar(year, month) {
    const calendarContainer = document.querySelector('.calendar');
    calendarContainer.innerHTML = ''; // Clear previous calendar

    const monthName = new Date(year, month).toLocaleString('default', { month: 'long' });
    const monthHeader = document.createElement('div');
    monthHeader.className = 'month-name';
    monthHeader.innerText = monthName;
    calendarContainer.appendChild(monthHeader);

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Empty slots for days before the first of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'day';
        calendarContainer.appendChild(emptyDay);
    }

    // Create day elements
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.innerText = day;

        const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

        // Check if a challenge was completed or missed
        if (challengeData[dateKey] === true) {
            dayElement.classList.add('completed');
        } else if (challengeData[dateKey] === false) {
            dayElement.classList.add('missed');
        }

        calendarContainer.appendChild(dayElement);
    }
}

// Create calendar for October 2024
createCalendar(2024, 9); // October (month is 0-indexed)
