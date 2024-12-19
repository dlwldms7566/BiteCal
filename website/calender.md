---
layout: page
title: Calender
permalink: /calender/
---

<main class="calendar-page">
    <h1>Meal Calendar</h1>
    <div class="calendar-navigation">
        <button id="prev-month" class="arrow">&lt;</button>
        <span id="current-month-year"></span>
        <button id="next-month" class="arrow">&gt;</button>
    </div>
    <div id="calendar"></div>
    <button id="add-log-button" class="btn">Add New Log</button>
</main>

<script>
    // Create a basic calendar for the current month
    const today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth(); // 0 = January

    const calendarContainer = document.getElementById('calendar');

    function renderCalendar(year, month) {
        const firstDay = new Date(year, month, 1).getDay(); // Day of the week (0 = Sunday)
        const daysInMonth = new Date(year, month + 1, 0).getDate(); // Total days in the month

        let calendarHTML = '<table>';
        calendarHTML += '<thead><tr>';
        ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(day => {
            calendarHTML += `<th>${day}</th>`;
        });
        calendarHTML += '</tr></thead>';

        calendarHTML += '<tbody><tr>';

        for (let i = 0; i < firstDay; i++) {
            calendarHTML += '<td></td>'; // Empty cells for days before the first day of the month
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            calendarHTML += `<td class="calendar-day" data-date="${date}">${day}</td>`;
            if ((day + firstDay) % 7 === 0) calendarHTML += '</tr><tr>'; // New row for the next week
        }

        calendarHTML += '</tr></tbody></table>';
        calendarContainer.innerHTML = calendarHTML;
    }

    renderCalendar(year, month);

    // Add event listener to each calendar day
    // 수정된 경로를 `baseurl`에 맞춰 동적으로 처리
    calendarContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('calendar-day')) {
            const selectedDate = e.target.dataset.date;
            localStorage.setItem('selectedDate', selectedDate); // 선택한 날짜를 저장
            window.location.href = "{{ site.baseurl }}/log/";

        }
    });
        document.getElementById('add-log-button').addEventListener('click', () => {
            const today = new Date().toISOString().split('T')[0]; // 오늘 날짜
            localStorage.setItem('selectedDate', today); // 오늘 날짜 저장
            window.location.href = "{{ site.baseurl }}/log/";

        });
    
    // 현재 달과 연도를 표시하는 함수
    function updateMonthYearDisplay() {
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        document.getElementById('current-month-year').textContent =
            `${monthNames[month]} ${year}`;
    }

    // 이벤트 리스너 추가: 이전 달
    document.getElementById('prev-month').addEventListener('click', () => {
        month--;
        if (month < 0) {
            month = 11; // December
            year--; // Previous year
        }
        updateMonthYearDisplay();
        renderCalendar(year, month);
    });

    // 이벤트 리스너 추가: 다음 달
    document.getElementById('next-month').addEventListener('click', () => {
        month++;
        if (month > 11) {
            month = 0; // January
            year++; // Next year
        }
        updateMonthYearDisplay();
        renderCalendar(year, month);
    });

    // 초기 달과 연도 표시
    updateMonthYearDisplay();
    renderCalendar(year, month);
</script>

<style>
    main.calendar-page {
        font-family: 'Nanum Gothic Coding', monospace;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        text-align: center;
        background-color: #f8f9fa;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    h1 {
        font-family: 'Arial', sans-serif;
        font-size: 28px;
        color: #FF9800;
        margin-bottom: 20px;
    }

    .calendar-navigation {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }

    .arrow {
        background-color: transparent;
        border: none;
        font-size: 28px;
        cursor: pointer;
        padding: 5px 15px;
        color: #FF9800;
    }

    .arrow:hover {
        background-color: rgba(255, 152, 0, 0.1);
        border-radius: 50%;
        transform: scale(1.2);
    }

    #current-month-year {
        font-size: 22px;
        font-weight: bold;
        color: #333;
        margin: 0 20px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
        background-color: white;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    th {
        background-color: #FF9800; /* 주황색 계열 */
        color: white;
        font-weight: bold;
        padding: 10px 0;
        text-transform: uppercase;
        font-size: 14px;
    }

    td {
        width: 14.28%;
        height: 80px;
        text-align: center;
        border: 1px solid #e0e0e0;
        font-size: 16px;
        color: #555;
    }

    td.empty {
        background-color: #f0f0f0;
    }

    .calendar-day {
        cursor: pointer;
        position: relative;
        border-radius: 5px;
        transition: background-color 0.2s ease, color 0.2s ease;
    }

    .calendar-day:hover {
        background-color: #FFE0B2; /* 주황색 계열의 연한 배경 */
        color: #E65100; /* 주황색 계열의 진한 글씨 */
    }

    .calendar-day.selected {
        background-color: #FF9800; /* 주황색 계열 */
        color: white;
        font-weight: bold;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    }

    .btn {
        margin-top: 20px;
        padding: 10px 20px;
        font-size: 16px;
        background-color: #FF9800; /* 주황색 계열 */
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.2s ease, transform 0.1s ease;
    }

    .btn:hover {
    background-color: #E67E22; /* 조금 더 어두운 주황색 */
    transform: scale(1.05);
    }
</style>
