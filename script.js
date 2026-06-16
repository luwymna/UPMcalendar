// ========== ACADEMIC CALENDAR DATA ==========
function parseDate(text) { return new Date(`${text}T00:00:00`); }

let currentLevel = 'bachelor';

function getEventForDate(date) {
    return academicPeriods.find(e =>
        date >= e.startDate &&
        date <= e.endDate &&
        e.level === currentLevel
    );
}

const academicPeriods = [
    // SEMESTER 1 (Bachelor)
    { start: '2025-10-13', end: '2025-10-19', label: 'Week 1 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2025-10-20', end: '2025-10-26', label: 'Week 2 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2025-10-27', end: '2025-11-02', label: 'Week 3 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2025-11-03', end: '2025-11-09', label: 'Week 4 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2025-11-10', end: '2025-11-16', label: 'Week 5 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2025-11-17', end: '2025-11-23', label: 'Week 6 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2025-11-24', end: '2025-11-30', label: 'Week 7 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2025-12-01', end: '2025-12-07', label: 'Mid-Semester Break', type: 'break', level: 'bachelor' },
    { start: '2025-12-08', end: '2025-12-14', label: 'Week 8 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2025-12-15', end: '2025-12-21', label: 'Week 9 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2025-12-22', end: '2025-12-28', label: 'Week 10 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2025-12-29', end: '2026-01-04', label: 'Week 11 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2026-01-05', end: '2026-01-11', label: 'Week 12 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2026-01-12', end: '2026-01-18', label: 'Week 13 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2026-01-19', end: '2026-01-25', label: 'Week 14 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2026-01-26', end: '2026-02-01', label: 'Week 15 - Revision Week', type: 'revision', level: 'bachelor' },
    { start: '2026-02-02', end: '2026-02-08', label: 'Week 16 - Final exam', type: 'exam', level: 'bachelor' },
    { start: '2026-02-09', end: '2026-02-15', label: 'Week 17 - Final exam', type: 'exam', level: 'bachelor' },
    { start: '2026-02-16', end: '2026-03-22', label: 'End Semester Break', type: 'break', level: 'bachelor' },
    // SEMESTER 2 (Bachelor)
    { start: '2026-03-23', end: '2026-03-29', label: 'Week 1 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2026-03-30', end: '2026-04-05', label: 'Week 2 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2026-04-06', end: '2026-04-12', label: 'Week 3 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2026-04-13', end: '2026-04-19', label: 'Week 4 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2026-04-20', end: '2026-04-26', label: 'Week 5 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2026-04-27', end: '2026-05-03', label: 'Week 6 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2026-05-04', end: '2026-05-10', label: 'Week 7 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2026-05-11', end: '2026-05-17', label: 'Week 8 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2026-05-18', end: '2026-05-24', label: 'Week 9 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2026-05-25', end: '2026-05-31', label: 'Mid-Semester Break', type: 'break', level: 'bachelor' },
    { start: '2026-06-01', end: '2026-06-07', label: 'Week 10 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2026-06-08', end: '2026-06-14', label: 'Week 11 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2026-06-15', end: '2026-06-21', label: 'Week 12 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2026-06-22', end: '2026-06-28', label: 'Week 13 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2026-06-29', end: '2026-07-05', label: 'Week 14 - Lectures', type: 'lecture', level: 'bachelor' },
    { start: '2026-07-06', end: '2026-07-12', label: 'Week 15 - Revision Week', type: 'revision', level: 'bachelor' },
    { start: '2026-07-13', end: '2026-07-19', label: 'Week 16 - Final exam', type: 'exam', level: 'bachelor' },
    { start: '2026-07-20', end: '2026-07-26', label: 'Week 17 - Final exam', type: 'exam', level: 'bachelor' },
    { start: '2026-07-27', end: '2026-10-04', label: 'End Semester Break', type: 'break', level: 'bachelor' },
    //FOUNDATION SEMESTER 1
    { start: '2025-07-14', end: '2025-07-20', label: 'Week 1 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2025-07-21', end: '2025-07-27', label: 'Week 2 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2025-07-28', end: '2025-08-03', label: 'Week 3 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2025-08-04', end: '2025-08-10', label: 'Week 4 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2025-08-11', end: '2025-08-17', label: 'Week 5 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2025-08-18', end: '2025-08-24', label: 'Week 6 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2025-08-25', end: '2025-08-31', label: 'Week 7 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2025-09-01', end: '2025-09-07', label: 'Week 8 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2025-09-08', end: '2025-09-14', label: 'Week 9 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2025-09-15', end: '2025-09-21', label: 'Mid-Semester Break', type: 'break', level: 'foundation' },
    { start: '2025-09-22', end: '2025-09-28', label: 'Week 10 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2025-09-29', end: '2025-10-05', label: 'Week 11 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2025-10-06', end: '2025-10-12', label: 'Week 12 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2025-10-13', end: '2025-10-19', label: 'Week 13 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2025-10-20', end: '2025-10-26', label: 'Week 14 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2025-10-27', end: '2025-11-02', label: 'Week 15 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2025-11-03', end: '2025-11-09', label: 'Week 16 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2025-11-10', end: '2025-11-16', label: 'Week 17 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2025-11-17', end: '2025-11-23', label: 'Week 18 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2025-11-24', end: '2025-11-30', label: 'Week 19 - Revision Week', type: 'revision', level: 'foundation' },
    { start: '2025-12-01', end: '2025-12-07', label: 'Week 20 - Final Exam', type: 'exam', level: 'foundation' },
    { start: '2025-12-08', end: '2025-12-14', label: 'Week 21 - Final Exam', type: 'exam', level: 'foundation' },
    { start: '2025-12-15', end: '2026-01-11', label: 'End Semester Break', type: 'break', level: 'foundation' },   
    //FOUNDATION SEMESTER 2
    { start: '2026-01-12', end: '2026-01-18', label: 'Week 1 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2026-01-19', end: '2026-01-25', label: 'Week 2 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2026-01-26', end: '2026-02-01', label: 'Week 3 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2026-02-02', end: '2026-02-08', label: 'Week 4 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2026-02-09', end: '2026-02-15', label: 'Week 5 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2026-02-16', end: '2026-02-22', label: 'Week 6 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2026-02-23', end: '2026-03-01', label: 'Week 7 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2026-03-02', end: '2026-03-08', label: 'Week 8 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2026-03-09', end: '2026-03-15', label: 'Week 9 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2026-03-16', end: '2026-03-22', label: 'Mid-Semester Break', type: 'break', level: 'foundation' },
    { start: '2026-03-23', end: '2026-03-29', label: 'Week 10 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2026-03-30', end: '2026-04-05', label: 'Week 11 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2026-04-06', end: '2026-04-12', label: 'Week 12 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2026-04-13', end: '2026-04-19', label: 'Week 13 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2026-04-20', end: '2026-04-26', label: 'Week 14 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2026-04-27', end: '2026-05-03', label: 'Week 15 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2026-05-04', end: '2026-05-10', label: 'Week 16 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2026-05-11', end: '2026-05-17', label: 'Week 17 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2026-05-18', end: '2026-05-24', label: 'Week 18 - Lectures', type: 'lecture', level: 'foundation' },
    { start: '2026-05-25', end: '2026-05-31', label: 'Week 19 - Revision Week', type: 'revision', level: 'foundation' },
    { start: '2026-06-01', end: '2026-06-07', label: 'Week 20 - Final Exam', type: 'exam', level: 'foundation' },
    { start: '2026-06-08', end: '2026-06-14', label: 'Week 21 - Final Exam', type: 'exam', level: 'foundation' },
].map(p => ({ ...p, startDate: parseDate(p.start), endDate: parseDate(p.end) }));

const publicHolidays = [
    { date: '2025-10-20', label: 'Deepavali' },
    { date: '2025-10-21', label: 'Deepavali (observed)' },
    { date: '2025-12-11', label: 'Sultan Selangor\'s Birthday' },
    { date: '2025-12-25', label: 'Christmas' },
    { date: '2025-12-26', label: 'Christmas Holiday' },
    { date: '2025-12-27', label: 'Christmas Holiday' },
    { date: '2026-01-01', label: 'New Year' },
    { date: '2026-02-01', label: 'Thaipusam' },
    { date: '2026-02-02', label: 'Cuti Thaipusam' },
    { date: '2026-04-03', label: 'Good Friday' },
    { date: '2026-05-01', label: 'Labour Day' },
    { date: '2026-05-27', label: 'Hari Raya Aidiladha' },
    { date: '2026-05-31', label: 'Wesak Day' },
    { date: '2026-06-01', label: 'Wesak Holiday & YDP Agong\'s Birthday' },
    { date: '2026-06-02', label: 'Gawai Day' },
    { date: '2026-06-17', label: 'Awal Muharam' },
    { date: '2026-07-22', label: 'Hari Sarawak' },
    { date: '2026-08-31', label: 'Merdeka Day' },
    { date: '2026-09-16', label: 'Malaysia Day' }
].map(d => ({ dateObj: parseDate(d.date), label: d.label }));

const midSemesterBreaks = {
    bachelor: {
        sem1: { start: parseDate('2025-12-01'), end: parseDate('2025-12-07') },
        sem2: { start: parseDate('2026-05-25'), end: parseDate('2026-05-31') }
    },
    foundation: {
        sem1: { start: parseDate('2025-09-15'), end: parseDate('2025-09-21') },
        sem2: { start: parseDate('2026-03-16'), end: parseDate('2026-03-22') }
    }, 
};

function getSemesterProgress() {
    const today = new Date();
    const semesterStart = getSemesterStartDate(today);
    if (!semesterStart) return { percentage: 0 };

    // Determine the end date of the current semester
    let semesterEnd;
    const semLabel = getSemesterLabel(today.getFullYear(), today.getMonth());

    if (currentLevel === 'bachelor') {
        if (semLabel === 'SEM 1') {
            semesterEnd = parseDate('2026-02-15'); // Last day of final exams for Semester 1
        } else if (semLabel === 'SEM 2') {
            semesterEnd = parseDate('2026-07-26'); // Last day of final exams for Semester 2
        }
    } else if (currentLevel === 'foundation') {
        if (semLabel === 'SEM 1') {
            semesterEnd = parseDate('2025-12-14'); // Last day of final exams for Foundation Semester 1
        } else if (semLabel === 'SEM 2') {
            semesterEnd = parseDate('2026-06-14'); // Last day of final exams for Foundation Semester 2
        }
    }

    if (!semesterEnd) return { percentage: 0 };

    const msPerDay = 24 * 60 * 60 * 1000;

    // Calculate total days in the semester (including breaks)
    const totalDaysInSemester = Math.floor((semesterEnd - semesterStart) / msPerDay);

    // Calculate break days for the current semester
    let breakDays = 0;
    const breaks = midSemesterBreaks[currentLevel] || {};
    if (semLabel === 'SEM 1' && breaks.sem1) {
        breakDays = Math.floor((breaks.sem1.end - breaks.sem1.start) / msPerDay) + 1; // +1 to include both start and end dates
    } else if (semLabel === 'SEM 2' && breaks.sem2) {
        breakDays = Math.floor((breaks.sem2.end - breaks.sem2.start) / msPerDay) + 1;
    }

    // Calculate actual lecture days (total days - break days)
    const actualLectureDays = totalDaysInSemester - breakDays;

    // Calculate days passed (excluding break days)
    let daysPassed = Math.floor((today - semesterStart) / msPerDay);

    // Subtract break days if today is after the break
    if (semLabel === 'SEM 1' && breaks.sem1 && today > breaks.sem1.end) {
        daysPassed -= Math.floor((breaks.sem1.end - breaks.sem1.start) / msPerDay) + 1;
    } else if (semLabel === 'SEM 2' && breaks.sem2 && today > breaks.sem2.end) {
        daysPassed -= Math.floor((breaks.sem2.end - breaks.sem2.start) / msPerDay) + 1;
    }

    // Ensure daysPassed is not negative or exceeds actualLectureDays
    const clampedDaysPassed = Math.max(0, Math.min(daysPassed, actualLectureDays));
    const percentage = actualLectureDays > 0 ? Math.round((clampedDaysPassed / actualLectureDays) * 100) : 0;

    return { percentage, daysPassed: clampedDaysPassed, totalDaysInSemester: actualLectureDays };
}

// Function to update progress bar
function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');

    if (!progressBar || !progressText) return;

    const { percentage, daysPassed, totalDaysInSemester } = getSemesterProgress();

    // Update progress bar width
    progressBar.style.setProperty('--progress-width', `${percentage}%`);

    // Update progress text
    progressText.textContent = `${percentage}% (${daysPassed}/${totalDaysInSemester} days)`;
}

function getHolidayForDate(date) { return publicHolidays.find(h => h.dateObj.toDateString() === date.toDateString()); }
function getSemesterLabel(y, m) {
    const d = new Date(y, m, 1);
    const breaks = midSemesterBreaks[currentLevel] || {};

    // Default Bachelor dates
    let sem1Start = parseDate('2025-10-13');
    let sem1End = parseDate('2026-02-15'); // Last day of final exams for Semester 1
    let sem2Start = parseDate('2026-03-23');
    let sem2End = parseDate('2026-07-26'); // Last day of final exams for Semester 2

    // Adjust for Foundation
    if (currentLevel === 'foundation') {
        sem1Start = parseDate('2025-07-14');
        sem1End = parseDate('2025-12-14'); // Last day of final exams for Foundation Semester 1
        sem2Start = parseDate('2026-01-12');
        sem2End = parseDate('2026-06-14'); // Last day of final exams for Foundation Semester 2
    }

    return (d >= sem1Start && d <= sem1End) ? 'SEM 1' :
           (d >= sem2Start && d <= sem2End) ? 'SEM 2' : null;
}

function getSemesterStartDate(date) {
    if (currentLevel === 'bachelor') {
        if (date >= parseDate('2025-10-13') && date < parseDate('2026-03-23')) {
            return parseDate('2025-10-13'); // Semester 1 start
        } else if (date >= parseDate('2026-03-23')) {
            return parseDate('2026-03-23'); // Semester 2 start
        }
    } else if (currentLevel === 'foundation') {
        if (date >= parseDate('2025-07-14') && date < parseDate('2026-01-12')) {
            return parseDate('2025-07-14'); // Semester 1 start
        } else if (date >= parseDate('2026-01-12')) {
            return parseDate('2026-01-12'); // Semester 2 start
        }
    }
    return null;
}

function getWeekNumberBeforeBreak(date, semesterStart) {
    const msPerDay = 24 * 60 * 60 * 1000;
    const daysDiff = Math.floor((date - semesterStart) / msPerDay);
    return Math.floor(daysDiff / 7) + 1;
}

function getWeekNumberAfterBreak(date, semesterStart, breakStart, breakEnd) {
    const msPerDay = 24 * 60 * 60 * 1000;
    const breakDuration = Math.floor((breakEnd - breakStart) / msPerDay) + 1; // Include both start and end dates
    const daysDiff = Math.floor((date - semesterStart) / msPerDay);
    const adjustedDaysDiff = daysDiff - breakDuration;
    return Math.floor(adjustedDaysDiff / 7) + 1;
}

function getWeekNumberForDate(date, event) {
    if (date.getDay() !== 1) return null; // Only show on Mondays
    if (!event) return null;
    if (event.type === 'break') return null;

    const semesterStart = getSemesterStartDate(date);
    if (!semesterStart) return null;

    const breaks = midSemesterBreaks[currentLevel] || {};
    const isSem1 =
        (currentLevel === 'bachelor' && date >= parseDate('2025-10-13') && date < parseDate('2026-03-23')) ||
        (currentLevel === 'foundation' && date >= parseDate('2025-07-14') && date < parseDate('2026-01-12'));

    const isSem2 =
        (currentLevel === 'bachelor' && date >= parseDate('2026-03-23')) ||
        (currentLevel === 'foundation' && date >= parseDate('2026-01-12'));

    if (isSem1 && breaks.sem1) {
        const breakStart = breaks.sem1.start;
        const breakEnd = breaks.sem1.end;
        if (date < breakStart) {
            return getWeekNumberBeforeBreak(date, semesterStart);
        } else if (date > breakEnd) {
            return getWeekNumberAfterBreak(date, semesterStart, breakStart, breakEnd);
        } else {
            return null;
        }
    }
    else if (isSem2 && breaks.sem2) {
        const breakStart = breaks.sem2.start;
        const breakEnd = breaks.sem2.end;
        if (date < breakStart) {
            return getWeekNumberBeforeBreak(date, semesterStart);
        } else if (date > breakEnd) {
            return getWeekNumberAfterBreak(date, semesterStart, breakStart, breakEnd);
        } else {
            return null;
        }
    }
    else if (isSem1 || isSem2) {
        return getWeekNumberBeforeBreak(date, semesterStart);
    }

    return null;
}

function createMonthCard(year, month, today) {
    const card = document.createElement('div');
    card.className = 'month-card';

    let mdiv = document.createElement('div');
    mdiv.className = 'month-name';
    mdiv.textContent = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });

    let wdiv = document.createElement('div');
    wdiv.className = 'calendar-days';
    ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].forEach(d => {
        let x = document.createElement('div');
        x.textContent = d;
        wdiv.appendChild(x);
    });

    let gdiv = document.createElement('div');
    gdiv.className = 'month-grid';

    let firstDay = new Date(year, month, 1);
    let startOffset = (firstDay.getDay() + 6) % 7;
    let daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < startOffset; i++) {
        let e = document.createElement('div');
        e.className = 'date-cell empty-cell';
        gdiv.appendChild(e);
    }

    for (let d = 1; d <= daysInMonth; d++) {
        let date = new Date(year, month, d),
            cell = document.createElement('div');
        cell.className = 'date-cell';
        let span = document.createElement('span');
        span.textContent = d;
        cell.appendChild(span);

let event = getEventForDate(date);
         if (event) {
             cell.classList.add(`event-${event.type}`);
             // Add period type as visual indicator
             let periodSpan = document.createElement('span');
             periodSpan.className = 'period-indicator';
             periodSpan.textContent = event.type.substring(0, 3).toUpperCase();
             cell.appendChild(periodSpan);
         }
         if (getHolidayForDate(date)) cell.classList.add('event-holiday');
         if (date.toDateString() === today.toDateString()) cell.classList.add('today');

        const weekNum = getWeekNumberForDate(date, event);
        if (weekNum) {
            let weekSpan = document.createElement('span');
            weekSpan.className = 'week-number';
            weekSpan.textContent = `W${weekNum}`;
            cell.appendChild(weekSpan);
        }
        
        cell.addEventListener('click', () => {
            if (Date.now() < ignoreCellClickUntil) return;
            showDayInfo(date);
        });
        
        // Prevent synthetic click after touchend on mobile
        cell.addEventListener('touchend', (e) => {
            if (Date.now() < ignoreCellClickUntil) return;
            e.preventDefault();
            showDayInfo(date);
        });
        
        gdiv.appendChild(cell);
    }

    // Add trailing empty cells to fill the last week
    let totalCells = startOffset + daysInMonth;
    let trailingCells = (7 - (totalCells % 7)) % 7;
    for (let i = 0; i < trailingCells; i++) {
        let e = document.createElement('div');
        e.className = 'date-cell empty-cell';
        gdiv.appendChild(e);
    }

    card.appendChild(mdiv);
    card.appendChild(wdiv);
    card.appendChild(gdiv);
    return card;
}

function renderCalendar() {
    const grid = document.getElementById('calendarGrid');
    const today = new Date();
    if (!grid) return;
    grid.innerHTML = '';
    if (currentLevel === 'foundation') {
        for (let m = 6; m <= 11; m++) grid.appendChild(createMonthCard(2025, m, today));
        for (let m = 0; m <= 5; m++) grid.appendChild(createMonthCard(2026, m, today));
    } else {
        for (let m = 9; m <= 11; m++) grid.appendChild(createMonthCard(2025, m, today));
        for (let m = 0; m <= 9; m++) grid.appendChild(createMonthCard(2026, m, today));
    }
}

let hideDayInfoTimeout = null;
let ignoreCellClickUntil = 0;

function showDayInfo(date) {
    if (hideDayInfoTimeout) {
        clearTimeout(hideDayInfoTimeout);
        hideDayInfoTimeout = null;
    }
    if (Date.now() < ignoreCellClickUntil) return;
    let info = document.getElementById('dayInfo');
    if (info.classList.contains('visible')) return;
    
    let ev = getEventForDate(date);
    let hol = getHolidayForDate(date);
    
    const formattedDate = date.toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const periodLabel = ev ? ev.label : 'No Period';
    const holidayLabel = hol ? hol.label : '';

    let html = `<div class="day-info-panel-overlay"></div>
        <div class="day-info-panel">
            <h3>${formattedDate}</h3>
             <p class="period-line${ev ? ` event-${ev.type}` : ''}"><strong>Period:</strong> ${periodLabel}</p>
            ${holidayLabel ? `<p class="holiday-line"><strong>Holiday:</strong> ${holidayLabel}</p>` : ''}
        </div>`;
    
    info.innerHTML = html;
    info.classList.add('visible');
    document.body.classList.add('day-info-open');
    
    const overlay = info.querySelector('.day-info-panel-overlay');
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            e.stopPropagation();
            hideDayInfo();
        });
        overlay.addEventListener('touchend', (e) => {
            e.stopPropagation();
            e.preventDefault();
            hideDayInfo();
        });
        overlay.addEventListener('touchstart', (e) => {
            e.stopPropagation();
        });
    }
}

function hideDayInfo() {
    let info = document.getElementById('dayInfo');
    if (info) {
        info.classList.remove('visible');
        document.body.classList.remove('day-info-open');
        if (hideDayInfoTimeout) clearTimeout(hideDayInfoTimeout);
        hideDayInfoTimeout = setTimeout(() => {
            info.innerHTML = '';
            hideDayInfoTimeout = null;
        }, 300);
        ignoreCellClickUntil = Date.now() + 350;
    }
}

function hideMobileDayInfo() {
    hideDayInfo();
}

function renderLegend() {
    const legend = document.getElementById('legend');
    if (!legend) return;
    legend.innerHTML = `
        <div class="legend-chip lecture">Lecture / Semester</div>
        <div class="legend-chip lecture">Final lecture</div>
        <div class="legend-chip revision">Revision Week</div>
        <div class="legend-chip break">Break / Holiday Period</div>
        <div class="legend-chip holiday">Public Holiday</div>
    `;
}

function renderPeriodBadge() {
    const badge = document.getElementById('periodBadge');
    if (!badge) return;
    const today = new Date();
    const currentPeriod = getEventForDate(today);
    const semLabel = getSemesterLabel(today.getFullYear(), today.getMonth());
    if (currentPeriod) {
        badge.textContent = `${semLabel} • ${currentPeriod.label}`;
    } else if (semLabel) {
        badge.textContent = `${semLabel} • No Active Period`;
    } else {
        badge.textContent = 'No Active Period';
    }
}

function renderTodayBlock() {
    const today = new Date();
    const todayDate = document.getElementById('todayDate');
    const todayTime = document.getElementById('todayTime');
    if (todayDate) todayDate.textContent = today.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    if (todayTime) todayTime.textContent = today.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function renderCalendarSummary() {
    const summary = document.getElementById('calendarSummary');
    const today = new Date();
    if (!summary) return;

    const currentPeriod = getEventForDate(today);
    const nextEvent = academicPeriods.find(
        event => event.startDate > today && event.level === currentLevel
    );

    // Get the final exam period for the current semester
    const semLabel = getSemesterLabel(today.getFullYear(), today.getMonth());
    let finalExamStart, finalExamEnd;

    if (currentLevel === 'bachelor') {
        if (semLabel === 'SEM 1') {
            finalExamStart = parseDate('2026-02-02');
            finalExamEnd = parseDate('2026-02-15');
        } else if (semLabel === 'SEM 2') {
            finalExamStart = parseDate('2026-07-13');
            finalExamEnd = parseDate('2026-07-26');
        }
    } else if (currentLevel === 'foundation') {
        if (semLabel === 'SEM 1') {
            finalExamStart = parseDate('2025-12-01');
            finalExamEnd = parseDate('2025-12-14');
        } else if (semLabel === 'SEM 2') {
            finalExamStart = parseDate('2026-06-01');
            finalExamEnd = parseDate('2026-06-14');
        }
    }

    // Calculate days left until final exam
    let daysLeftUntilFinal = null;
    if (finalExamStart && finalExamEnd) {
        if (today <= finalExamEnd) {
            const msPerDay = 24 * 60 * 60 * 1000;
            daysLeftUntilFinal = Math.floor((finalExamStart - today) / msPerDay);
            if (today >= finalExamStart) {
                daysLeftUntilFinal = 0; // Final exam has started
            }
        }
    }

    // Build the summary HTML
    let summaryHTML = '';
    if (currentPeriod) {
        summaryHTML += `Current academic period: <strong>${currentPeriod.label}</strong>. `;
    } else {
        summaryHTML += 'No active academic period today. ';
    }

    if (nextEvent) {
        summaryHTML += `Next: <strong>${nextEvent.label}</strong> period starts on ${nextEvent.startDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}.`;
    } else {
        summaryHTML += 'No upcoming academic periods in this academic year.';
    }

    // Add days left until final exam (if applicable)
    if (daysLeftUntilFinal !== null && daysLeftUntilFinal >= 0 && today < finalExamStart) {
        summaryHTML += `<br><span style="color: #ff4757; font-weight: 600;">Final exam starts in ${daysLeftUntilFinal} day${daysLeftUntilFinal !== 1 ? 's' : ''}.</span>`;
    }

    summary.innerHTML = summaryHTML;
}

// ========== GPA SYSTEM - DYNAMIC SEMESTERS ==========
const gradePoints = { 'A': 4.0, 'A-': 3.75, 'B+': 3.5, 'B': 3.0, 'B-': 2.75, 'C+': 2.5, 'C': 2.0, 'C-': 1.75, 'D+': 1.5, 'D': 1.0, 'F': 0.0 };

let semesters = [];
let nextSemesterId = 1;

function loadFromStorage() {
    let stored = localStorage.getItem('upmDynamicSemesters');
    if (stored) {
        semesters = JSON.parse(stored);
        nextSemesterId = Math.max(...semesters.map(s => s.id), 0) + 1;
    } else {
        semesters = [
            { id: 1, name: 'Semester 1', subjects: [] },
            { id: 2, name: 'Semester 2', subjects: [] }
        ];
        nextSemesterId = 3;
    }
}

function saveToStorage() { localStorage.setItem('upmDynamicSemesters', JSON.stringify(semesters)); }

function calculateSemesterGPA(semester) {
    if (!semester.subjects.length) return 0;
    let totalQualityPoints = semester.subjects.reduce((sum, s) => sum + s.qp, 0);
    let totalCredits = semester.subjects.reduce((sum, s) => sum + s.credit, 0);
    return totalQualityPoints / totalCredits;
}

function calculateCGPA() {
    let allSubjects = [];
    semesters.forEach(sem => allSubjects.push(...sem.subjects));
    if (!allSubjects.length) return 0;

    let totalQualityPoints = allSubjects.reduce((sum, s) => sum + s.qp, 0);
    let totalCredits = allSubjects.reduce((sum, s) => sum + s.credit, 0);
    return totalQualityPoints / totalCredits;
}

function updateCGPA() {
    let cgpa = calculateCGPA();
    document.getElementById('cgpaValue').textContent = cgpa.toFixed(2);
    let status = cgpa >= 4.00 ? 'ANC Award' : cgpa >= 3.75 ? 'Dean\'s List' : (cgpa >= 3.0 ? 'Good Standing' : (cgpa >= 2.0 ? 'Satisfactory' : '⚠️ Need Improvement'));
    document.getElementById('cgpaStatus').textContent = status;
}

function addSubject(semesterId) {
    let semester = semesters.find(s => s.id === semesterId);
    if (!semester) return;

    let codeInput = document.getElementById(`code_${semesterId}`);
    let nameInput = document.getElementById(`name_${semesterId}`);
    let creditInput = document.getElementById(`credit_${semesterId}`);
    let gradeSelect = document.getElementById(`grade_${semesterId}`);

    let code = codeInput.value.trim().toUpperCase();
    let name = nameInput.value.trim().toUpperCase();
    let credit = parseFloat(creditInput.value);
    let grade = gradeSelect.value;

    if (!code || !name || !credit || !grade) {
        alert('Please fill all fields and select a grade');
        return;
    }

    semester.subjects.push({
        code,
        name,
        credit,
        grade,
        qp: gradePoints[grade] * credit
    });

    saveToStorage();
    codeInput.value = '';
    nameInput.value = '';
    creditInput.value = '';
    gradeSelect.value = '';

    renderSemester(semesterId);
    updateCGPA();
}

function deleteSubject(semesterId, subjectIndex) {
    let semester = semesters.find(s => s.id === semesterId);
    if (semester) {
        semester.subjects.splice(subjectIndex, 1);
        saveToStorage();
        renderSemester(semesterId);
        updateCGPA();
    }
}

function toggleSemesterContent(semesterId) {
    let content = document.getElementById(`semester_content_${semesterId}`);
    if (content) content.classList.toggle('collapsed');
}

function deleteSemester(semesterId) {
    if (semesters.length <= 1) {
        alert('You need at least one semester!');
        return;
    }
    if (confirm('Delete this semester and all its subjects?')) {
        semesters = semesters.filter(s => s.id !== semesterId);
        saveToStorage();
        renderAllSemesters();
        updateCGPA();
    }
}

function renderSemester(semesterId) {
    let semester = semesters.find(s => s.id === semesterId);
    if (!semester) return;

    let container = document.getElementById(`semester_${semesterId}`);
    if (!container) return;

    let gpa = calculateSemesterGPA(semester);

    container.innerHTML = `
    <div class="semester-header" onclick="toggleSemesterContent(${semesterId})">
        <div class="semester-title">
            📚${semester.name}
            <span class="semester-gpa">GPA: ${gpa.toFixed(2)}</span>
        </div>
        <button class="delete-semester" onclick="event.stopPropagation(); deleteSemester(${semesterId})">✕ Delete</button>
    </div>
    <div class="semester-content" id="semester_content_${semesterId}">
        <div class="gpa-form">
            <input type="text" id="code_${semesterId}" placeholder="Course Code">
            <input type="text" id="name_${semesterId}" placeholder="Course Name">
            <input type="number" id="credit_${semesterId}" placeholder="Credit Hours" min="1" max="6">
            <select id="grade_${semesterId}">
                <option value="">Select Grade</option>
                <option value="A">A (4.00)</option>
                <option value="A-">A- (3.75)</option>
                <option value="B+">B+ (3.50)</option>
                <option value="B">B (3.00)</option>
                <option value="B-">B- (2.75)</option>
                <option value="C+">C+ (2.50)</option>
                <option value="C">C (2.00)</option>
                <option value="C-">C- (1.75)</option>
                <option value="D+">D+ (1.50)</option>
                <option value="D">D (1.00)</option>
                <option value="F">F (0.00)</option>
            </select>
            <button class="btn-primary" onclick="addSubject(${semesterId})">+ Add Subject</button>
        </div>
        <div class="gpa-table">
            <table>
                <thead>
                    <tr><th>Subject</th>
                    <th>Code</th>
                    <th>Credit Hours</th>
                    <th>Grade</th>
                    <th>Action</th></tr>
                </thead>
                <tbody id="table_${semesterId}"></tbody>
            </table>
        </div>
    </div>
`;

    let tbody = document.getElementById(`table_${semesterId}`);
tbody.innerHTML = '';
semester.subjects.forEach((subj, idx) => {
    let row = tbody.insertRow();
    row.insertCell(0).textContent = subj.name;
    row.insertCell(1).textContent = subj.code;
    row.insertCell(2).textContent = subj.credit;
    row.insertCell(3).textContent = subj.grade;
    let btnCell = row.insertCell(4);
    let btn = document.createElement('button');
    btn.innerHTML = '🗑️';
    btn.className = 'btn-danger';
    btn.onclick = () => deleteSubject(semesterId, idx);
    btnCell.appendChild(btn);
});
}

function renderAllSemesters() {
    let container = document.getElementById('semestersContainer');
    if (!container) return;
    container.innerHTML = '';
    semesters.forEach(sem => {
        let div = document.createElement('div');
        div.className = 'semester-card';
        div.id = `semester_${sem.id}`;
        container.appendChild(div);
        renderSemester(sem.id);
    });
}

function addNewSemester() {
    let name = prompt(`Enter semester name (e.g., "Semester ${nextSemesterId}"):`);
    if (!name) return;
    semesters.push({ id: nextSemesterId++, name, subjects: [] });
    saveToStorage();
    renderAllSemesters();
}

function initializeNav() {
    const navBtns = document.querySelectorAll('.nav-btn[data-view]');
    const mainContent = document.getElementById('mainContent');
    const oyenSpinner = document.getElementById('oyenSpinner');
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            navBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.view-pane').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            const viewId = `${btn.dataset.view}-view`;
            const pane = document.getElementById(viewId);
            if (pane) pane.classList.add('active');
            if (oyenSpinner) {
                oyenSpinner.style.display = btn.dataset.view === 'calendar' ? 'block' : 'none';
            }
        });
    });
}

function initializeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    const toggleBtns = document.querySelectorAll('.sidebar-toggle, .mobile-sidebar-toggle');

    if (!sidebar || !mainContent) return;

    function toggleSidebar() {
        requestAnimationFrame(() => {
            const isExpanded = sidebar.classList.toggle('expanded');
            toggleBtns.forEach(btn => {
                btn.classList.toggle('sidebar-expanded', isExpanded);
            });
        });
    }

    // Add click event to all toggle buttons
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleSidebar();
        });
    });

    // Collapse sidebar when clicking OUTSIDE (not on sidebar or button)
    mainContent.addEventListener('click', (e) => {
        if (sidebar.contains(e.target) || Array.from(toggleBtns).some(btn => btn.contains(e.target))) {
            return; // Ignore clicks inside sidebar or on buttons
        }
        const isExpanded = sidebar.classList.contains('expanded');
        if (isExpanded) {
            requestAnimationFrame(() => {
                sidebar.classList.remove('expanded');
                toggleBtns.forEach(btn => {
                    btn.classList.remove('sidebar-expanded');
                });
            });
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
     renderCalendar();
     renderTodayBlock();
     renderLegend();
     renderCalendarSummary();
     renderPeriodBadge();
     updateProgressBar();
     
     // Auto-scroll to today after 1 second
     setTimeout(() => {
         const todayCell = document.querySelector('.date-cell.today');
         if (todayCell) {
             const monthCard = todayCell.closest('.month-card');
             if (monthCard) monthCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
         }
     }, 1000);
     
    loadFromStorage();
    renderAllSemesters();
    updateCGPA();
    semesters.forEach((s, idx) => {
        const content = document.getElementById(`semester_content_${s.id}`);
        if (content && idx !== 0) content.classList.add('collapsed');
    });
    
    const addSemesterBtn = document.getElementById('addSemesterBtn');
    if (addSemesterBtn) {
        addSemesterBtn.addEventListener('click', addNewSemester);
    }
    
    // Study level filter
    const studyLevelSelect = document.getElementById('studyLevelSelect');
    if (studyLevelSelect) {
        const trigger = studyLevelSelect.querySelector('.custom-select-trigger');
        const options = studyLevelSelect.querySelectorAll('.custom-select-option');
        
        trigger.addEventListener('click', () => {
            studyLevelSelect.classList.toggle('open');
        });
        
        options.forEach(option => {
            option.addEventListener('click', () => {
                const span = trigger.querySelector('span');
                if (span) {
                    span.textContent = option.textContent;
                }
                currentLevel = option.dataset.value;
                studyLevelSelect.classList.remove('open');
                renderCalendar();
                renderPeriodBadge();
                renderCalendarSummary();
                updateProgressBar();
            });
        });
        
        document.addEventListener('click', (e) => {
            if (!studyLevelSelect.contains(e.target)) {
                studyLevelSelect.classList.remove('open');
            }
        });
    }

    
    
    initializeNav();
    initializeSidebar();
    
    // Sidebar clock
    function updateClock() {
        const now = new Date();
        const dateEl = document.getElementById('clockDate');
        const timeEl = document.getElementById('clockTime');
        if (dateEl) dateEl.textContent = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
        if (timeEl) timeEl.textContent = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
        updateProgressBar(); // Update progress bar every second
    }
    updateClock();
    setInterval(updateClock, 1000);
    
    // Music player
    const musicBtn = document.getElementById('musicPlayBtn');
    const bgMusic = document.getElementById('bgMusic');
    const musicProgress = document.getElementById('musicProgress');
    const currentTimeEl = document.getElementById('currentTime');
    const durationTimeEl = document.getElementById('durationTime');
    if (musicBtn && bgMusic && musicProgress) {
        bgMusic.addEventListener('play', () => {
            musicBtn.innerHTML = '<svg class="icon-play" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
        });
        bgMusic.addEventListener('pause', () => {
            musicBtn.innerHTML = '<svg class="icon-play" viewBox="0 0 24 24" width="50" height="24" fill="currentColor"><path d="M8 5l8 7-8 7z"/></svg>';
        });
        let isDragging = false;
        musicBtn.addEventListener('click', () => {
            if (bgMusic.paused) {
                bgMusic.play();
                musicBtn.innerHTML = '<svg class="icon-pause" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
            } else {
                bgMusic.pause();
                musicBtn.innerHTML = '<svg class="icon-play" viewBox="0 0 24 24" width="50" height="24" fill="currentColor"><path d="M8 5l8 7-8 7z"/></svg>';
            }
        });
        bgMusic.addEventListener('loadedmetadata', () => {
            musicProgress.max = bgMusic.duration;
            durationTimeEl.textContent = formatTime(bgMusic.duration);
        });
        bgMusic.addEventListener('timeupdate', () => {
            if (!isDragging) {
                musicProgress.value = bgMusic.currentTime;
                currentTimeEl.textContent = formatTime(bgMusic.currentTime);
            }
        });
        bgMusic.addEventListener('ended', () => {
            musicBtn.innerHTML = '<svg class="icon-play" viewBox="0 0 24 24" width="50" height="24" fill="currentColor"><path d="M8 5l8 7-8 7" stroke="currentColor" stroke-width="2" fill="none"/></svg>';
        });
        musicProgress.addEventListener('input', () => {
            bgMusic.currentTime = musicProgress.value;
            currentTimeEl.textContent = formatTime(musicProgress.value);
        });
        musicProgress.addEventListener('mousedown', () => { isDragging = true; });
        musicProgress.addEventListener('touchstart', () => { isDragging = true; });
        musicProgress.addEventListener('change', () => {
            bgMusic.currentTime = musicProgress.value;
            isDragging = false;
        });
        musicProgress.addEventListener('mouseup', () => { isDragging = false; });
        musicProgress.addEventListener('touchend', () => { isDragging = false; });
    }
    function formatTime(sec) {
        if (isNaN(sec)) return '0:00';
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        return `${m}:${s.toString().padStart(2, '0')}`;
    }

    setTimeout(() => {
        const todayCell = document.querySelector('.date-cell.today');
        if (todayCell) {
            const monthCard = todayCell.closest('.month-card');
            if (monthCard) {
                monthCard.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // After scrolling, trigger the blinking animation
                setTimeout(() => {
                    todayCell.classList.add('blink-today');
                    // Remove the class after animation completes
                    setTimeout(() => {
                        todayCell.classList.remove('blink-today');
                    }, 1500); // 0.5s * 3 = 1.5s
                }, 500); // Wait 500ms after scrolling completes
            }
        }
    }, 100);// Small delay to ensure the cell is rendered
});