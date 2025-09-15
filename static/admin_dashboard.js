// A simple function to update the current date in the calendar
const calendarGrid = document.querySelector('.calendar-grid');
const calendarTitle = document.querySelector('.calendar-title');

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
];

// Define a list of holidays.
// Note: This is a static list. For a real-world application,
// this data should be fetched dynamically from a database.
const holidays = {
    // Format: "month-day": "Holiday Name" (months are 1-indexed)
    "1-1": "New Year's Day",
    "4-18": "Good Friday",
    "5-1": "Labor Day",
    "6-12": "Independence Day",
    "11-1": "All Saints' Day",
    "11-30": "Bonifacio Day",
    "12-25": "Christmas Day",
    "12-30": "Rizal Day"
};

function renderCalendar() {
    // Clear previous days
    while (calendarGrid.children.length > 7) {
        calendarGrid.removeChild(calendarGrid.lastChild);
    }

    // Update the month title
    calendarTitle.textContent = `${monthNames[currentMonth]} ${currentYear}`;

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const today = new Date();

    // Fill in leading inactive days from the previous month
    const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
        const day = document.createElement('span');
        day.classList.add('calendar-day', 'inactive');
        day.textContent = daysInPrevMonth - i;
        calendarGrid.appendChild(day);
    }

    // Render active days for the current month
    for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement('span');
        day.classList.add('calendar-day', 'active');
        day.textContent = i;

        // Check for holidays and add the .holiday class
        const holidayKey = `${currentMonth + 1}-${i}`;
        if (holidays[holidayKey]) {
            day.classList.add('holiday');
            // The title attribute is used to show the holiday name on hover
            day.title = holidays[holidayKey];
        }

        // Check if this day is the current day
        if (i === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
            day.classList.add('current');
        }
        calendarGrid.appendChild(day);
    }

    // Fill in trailing inactive days for the next month
    const totalDaysDisplayed = firstDayOfMonth + daysInMonth;
    const remainingSlots = 42 - totalDaysDisplayed;
    for (let i = 1; i <= remainingSlots; i++) {
        const day = document.createElement('span');
        day.classList.add('calendar-day', 'inactive');
        day.textContent = i;
        calendarGrid.appendChild(day);
    }
}

function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
}

document.addEventListener('DOMContentLoaded', () => {
    renderCalendar();
    document.getElementById('prev-month-btn').addEventListener('click', prevMonth);
    document.getElementById('next-month-btn').addEventListener('click', nextMonth);
});



document.getElementById('request-btn').addEventListener('click', () => {
    console.log('Navigating to request form...');
    window.location.href = '..//docs/request.html';
});

document.getElementById('transaction-history-btn').addEventListener('click', () => {
    console.log('Navigating to transaction history...');
    window.location.href = '..//docs/transaction-history.html';
});

document.getElementById('home-btn').addEventListener('click', () => {
    console.log('Navigating to home dashboard...');
    window.location.href = '..//docs/admin_dashboard.html';
});

document.getElementById('back-btn').addEventListener('click', () => {
    console.log('Going back to the previous page...');
    window.location.href = '..//docs/login.html';
});

document.getElementById('profile-btn').addEventListener('click', () => {
    console.log('Navigating to user profile...');
    window.location.href = '..//docs/admin_profile.html';
});

document.getElementById('logout-btn').addEventListener('click', () => {
    console.log('Logging out...');
    window.location.href = '..//docs/login.html';
});
