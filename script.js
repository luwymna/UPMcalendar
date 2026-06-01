// ========== ACADEMIC CALENDAR DATA ==========
function parseDate(text) { return new Date(`${text}T00:00:00`); }

const academicPeriods = [
    // SEMESTER 1
    { start: '2025-10-13', end: '2025-10-19', label: 'Week 1 - Lectures', type: 'lecture' },
    { start: '2025-10-20', end: '2025-10-26', label: 'Week 2 - Lectures', type: 'lecture' },
    { start: '2025-10-27', end: '2025-11-02', label: 'Week 3 - Lectures', type: 'lecture' },
    { start: '2025-11-03', end: '2025-11-09', label: 'Week 4 - Test I', type: 'exam' },
    { start: '2025-11-10', end: '2025-11-16', label: 'Week 5 - Test I', type: 'exam' },
    { start: '2025-11-17', end: '2025-11-23', label: 'Week 6 - Test I', type: 'exam' },
    { start: '2025-11-24', end: '2025-11-30', label: 'Week 7 - Lectures', type: 'lecture' },
    { start: '2025-12-01', end: '2025-12-07', label: 'Mid-Semester Break', type: 'break' },
    { start: '2025-12-08', end: '2025-12-14', label: 'Week 8 - Lectures', type: 'lecture' },
    { start: '2025-12-15', end: '2025-12-21', label: 'Week 9 - Test II', type: 'exam' },
    { start: '2025-12-22', end: '2025-12-28', label: 'Week 10 - Test II', type: 'exam' },
    { start: '2025-12-29', end: '2026-01-04', label: 'Week 11 - Test II', type: 'exam' },
    { start: '2026-01-05', end: '2026-01-11', label: 'Week 12 - Lectures', type: 'lecture' },
    { start: '2026-01-12', end: '2026-01-18', label: 'Week 13 - Lectures', type: 'lecture' },
    { start: '2026-01-19', end: '2026-01-25', label: 'Week 14 - Lectures', type: 'lecture' },
    { start: '2026-01-26', end: '2026-02-01', label: 'Week 15 - Revision Week', type: 'revision' },
    { start: '2026-02-02', end: '2026-02-08', label: 'Week 16 - Final Exam', type: 'exam' },
    { start: '2026-02-09', end: '2026-02-15', label: 'Week 17 - Final Exam', type: 'exam' },
    { start: '2026-02-16', end: '2026-03-22', label: 'End Semester Break', type: 'break' },
    // SEMESTER 2
    { start: '2026-03-23', end: '2026-03-29', label: 'Week 1 - Lectures', type: 'lecture' },
    { start: '2026-03-30', end: '2026-04-05', label: 'Week 2 - Lectures', type: 'lecture' },
    { start: '2026-04-06', end: '2026-04-12', label: 'Week 3 - Lectures', type: 'lecture' },
    { start: '2026-04-13', end: '2026-04-19', label: 'Week 4 - Test I', type: 'exam' },
    { start: '2026-04-20', end: '2026-04-26', label: 'Week 5 - Test I', type: 'exam' },
    { start: '2026-04-27', end: '2026-05-03', label: 'Week 6 - Test I', type: 'exam' },
    { start: '2026-05-04', end: '2026-05-10', label: 'Week 7 - Lectures', type: 'lecture' },
    { start: '2026-05-11', end: '2026-05-17', label: 'Week 8 - Lectures', type: 'lecture' },
    { start: '2026-05-18', end: '2026-05-24', label: 'Week 9 - Lectures', type: 'lecture' },
    { start: '2026-05-25', end: '2026-05-31', label: 'Mid-Semester Break', type: 'break' },
    { start: '2026-06-01', end: '2026-06-07', label: 'Week 10 - Test II', type: 'exam' },
    { start: '2026-06-08', end: '2026-06-14', label: 'Week 11 - Test II', type: 'exam' },
    { start: '2026-06-15', end: '2026-06-21', label: 'Week 12 - Lectures', type: 'lecture' },
    { start: '2026-06-22', end: '2026-06-28', label: 'Week 13 - Lectures', type: 'lecture' },
    { start: '2026-06-29', end: '2026-07-05', label: 'Week 14 - Lectures', type: 'lecture' },
    { start: '2026-07-06', end: '2026-07-12', label: 'Week 15 - Revision Week', type: 'revision' },
    { start: '2026-07-13', end: '2026-07-19', label: 'Week 16 - Final Exam', type: 'exam' },
    { start: '2026-07-20', end: '2026-07-26', label: 'Week 17 - Final Exam', type: 'exam' },
    { start: '2026-07-27', end: '2026-10-04', label: 'End Semester Break', type: 'break' }
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
    { date: '2026-06-16', label: 'Awal Muharam' },
    { date: '2026-07-22', label: 'Hari Sarawak' },
    { date: '2026-08-31', label: 'Merdeka Day' },
    { date: '2026-09-16', label: 'Malaysia Day' }
].map(d => ({ dateObj: parseDate(d.date), label: d.label }));

const midSemesterBreaks = {
    sem1: {
        start: parseDate('2025-12-01'),
        end: parseDate('2025-12-07'),
    },
    sem2: {
        start: parseDate('2026-05-25'),
        end: parseDate('2026-05-31'),
    },
};

function getEventForDate(date) { return academicPeriods.find(e => date >= e.startDate && date <= e.endDate); }
function getHolidayForDate(date) { return publicHolidays.find(h => h.dateObj.toDateString() === date.toDateString()); }
function getSemesterLabel(y, m) { let d = new Date(y, m, 1); return (d >= parseDate('2025-10-13') && d <= parseDate('2026-02-28')) ? 'SEM 1' : (d >= parseDate('2026-03-23') && d <= parseDate('2026-07-31')) ? 'SEM 2' : null; }

function getSemesterStartDate(date) {
    // SEMESTER 1: Starts on Oct 13, 2025 (Week 1)
    if (date >= parseDate('2025-10-13') && date < parseDate('2026-03-23')) {
        return parseDate('2025-10-13');
    }
    // SEMESTER 2: Starts on Mar 23, 2026 (Week 1)
    if (date >= parseDate('2026-03-23')) {
        return parseDate('2026-03-23');
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

    const semesterStart = getSemesterStartDate(date);
    if (!semesterStart) return null;

    // Check if the date is in Semester 1 or Semester 2
    const isSem1 = date >= parseDate('2025-10-13') && date < parseDate('2026-03-23');
    const isSem2 = date >= parseDate('2026-03-23');

    if (isSem1) {
        const breakStart = midSemesterBreaks.sem1.start;
        const breakEnd = midSemesterBreaks.sem1.end;

        if (date < breakStart) {
            // Before mid-semester break
            const weekNum = getWeekNumberBeforeBreak(date, semesterStart);
            return (weekNum >= 1 && weekNum <= 17) ? weekNum : null;
        } else if (date > breakEnd) {
            // After mid-semester break
            const weekNum = getWeekNumberAfterBreak(date, semesterStart, breakStart, breakEnd);
            return (weekNum >= 1 && weekNum <= 17) ? weekNum : null;
        } else {
            // During break (skip week number)
            return null;
        }
    } else if (isSem2) {
        const breakStart = midSemesterBreaks.sem2.start;
        const breakEnd = midSemesterBreaks.sem2.end;

        if (date < breakStart) {
            // Before mid-semester break
            const weekNum = getWeekNumberBeforeBreak(date, semesterStart);
            return (weekNum >= 1 && weekNum <= 17) ? weekNum : null;
        } else if (date > breakEnd) {
            // After mid-semester break
            const weekNum = getWeekNumberAfterBreak(date, semesterStart, breakStart, breakEnd);
            return (weekNum >= 1 && weekNum <= 17) ? weekNum : null;
        } else {
            // During break (skip week number)
            return null;
        }
    }

    return null;
}

function createMonthCard(year, month, today) {
    const card = document.createElement('div');
    card.className = 'month-card';
    const sem = getSemesterLabel(year, month);
    if (sem) {
        let b = document.createElement('div');
        b.className = 'semester-badge';
        b.textContent = sem;
        card.appendChild(b);
    }
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
    let firstDay = new Date(year, month, 1),
        startOffset = (firstDay.getDay() + 6) % 7,
        daysInMonth = new Date(year, month + 1, 0).getDate();
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
        if (event) cell.classList.add(`event-${event.type}`);
        if (getHolidayForDate(date)) cell.classList.add('event-holiday');
        if (date.toDateString() === today.toDateString()) cell.classList.add('today');
        
        const weekNum = getWeekNumberForDate(date, event);
        if (weekNum) {
            let weekSpan = document.createElement('span');
            weekSpan.className = 'week-number';
            weekSpan.textContent = `W${weekNum}`;
            cell.appendChild(weekSpan);
        }
        
        cell.onclick = () => showDayInfo(date);
        gdiv.appendChild(cell);
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
    for (let m = 9; m <= 11; m++) grid.appendChild(createMonthCard(2025, m, today));
    for (let m = 0; m <= 9; m++) grid.appendChild(createMonthCard(2026, m, today));
}

function showDayInfo(date) {
    let info = document.getElementById('dayInfo');
    let ev = getEventForDate(date),
        hol = getHolidayForDate(date);
    info.innerHTML = `<div class="day-info-panel"><button class="day-info-close" onclick="document.getElementById('dayInfo').classList.remove('visible')">×</button><h2>${date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}</h2><p><strong>Period:</strong> ${ev ? ev.label : 'None'}</p>${hol ? `<p><strong>Holiday:</strong> ${hol.label}</p>` : ''}</div>`;
    info.classList.add('visible');
}

function renderLegend() {
    const legend = document.getElementById('legend');
    if (!legend) return;
    legend.innerHTML = `
        <div class="legend-chip lecture">Lecture / Semester</div>
        <div class="legend-chip exam">Exam / Test</div>
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
    if (currentPeriod) {
        badge.textContent = currentPeriod.label;
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
    const nextEvent = academicPeriods.find(event => event.startDate > today);
    summary.innerHTML = (currentPeriod ? `Current academic period: <strong>${currentPeriod.label}</strong>. ` : 'No active academic period today. ') +
        (nextEvent ? `Next: <strong>${nextEvent.label}</strong> period starts on ${nextEvent.startDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}.` : 'No upcoming academic periods in this academic year.');
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
    let status = cgpa >= 3.75 ? '🏆 Dean\'s List' : (cgpa >= 3.0 ? '✅ Good Standing' : (cgpa >= 2.0 ? '📚 Satisfactory' : '⚠️ Need Improvement'));
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
    let name = nameInput.value.trim();
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
        qp: gradePoints[grade] * credit // Quality Points = Grade Points × Credit Hours
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
            📚 ${semester.name}
            <span class="semester-gpa">GPA: ${gpa.toFixed(2)}</span>
        </div>
        <button class="delete-semester" onclick="event.stopPropagation(); deleteSemester(${semesterId})">🗑 Delete Semester</button>
    </div>
    <div class="semester-content" id="semester_content_${semesterId}">
        <div class="gpa-form">
            <input type="text" id="code_${semesterId}" placeholder="Course Code (auto uppercase)">
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
                    <tr><th>Code</th><th>Subject</th><th>Credit Hours</th><th>Grade</th><th>Quality Points</th><th>Action</th></tr>
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
    row.insertCell(0).textContent = subj.code;
    row.insertCell(1).textContent = subj.name;
    row.insertCell(2).textContent = subj.credit; // Credit Hours
    row.insertCell(3).textContent = subj.grade;
    row.insertCell(4).textContent = subj.qp.toFixed(2); // Quality Points
    let btnCell = row.insertCell(5);
    let btn = document.createElement('button');
    btn.textContent = 'Remove';
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
    const navBtns = document.querySelectorAll('.nav-btn');
    const mainContent = document.getElementById('mainContent');
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            navBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.view-pane').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            const viewId = `${btn.dataset.view}-view`;
            const pane = document.getElementById(viewId);
            if (pane) pane.classList.add('active');
        });
    });
}

function initializeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleSidebarBtn');
    const mainContent = document.getElementById('mainContent');
    
    if (!toggleBtn || !sidebar) return;
    
    // Click toggle button to expand/collapse
    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('collapsed');
    });
    
    // Click on main content area to collapse sidebar
    if (mainContent) {
        mainContent.addEventListener('click', () => {
            sidebar.classList.add('collapsed');
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderCalendar();
    renderLegend();
    renderTodayBlock();
    renderCalendarSummary();
    renderPeriodBadge();
    setInterval(renderTodayBlock, 1000);
    setInterval(renderPeriodBadge, 60000);
    
    loadFromStorage();
    renderAllSemesters();
    updateCGPA();
    
    const addSemesterBtn = document.getElementById('addSemesterBtn');
    if (addSemesterBtn) {
        addSemesterBtn.addEventListener('click', addNewSemester);
    }
    
    initializeNav();
    initializeSidebar();
});
