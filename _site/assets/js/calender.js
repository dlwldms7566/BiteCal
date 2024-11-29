const logs = [
    { date: '2024-12-01', content: 'Pasta for lunch 🍝' },
    { date: '2024-12-02', content: 'Tried a new recipe for dinner 🍲' },
    { date: '2024-12-05', content: 'Ate at a new restaurant 🍔' },
  ];
  
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  const calendarContainer = document.getElementById('calendar');
  
  function generateCalendar(month, year) {
    calendarContainer.innerHTML = `
      <div class="calendar-header">
        <h1>${monthNames[month]} ${year}</h1>
      </div>
    `;
  
    dayNames.forEach(day => {
      calendarContainer.innerHTML += `<div class="calendar-day">${day}</div>`;
    });
  
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
  
    for (let i = 0; i < firstDay; i++) {
      calendarContainer.innerHTML += `<div class="calendar-date"></div>`;
    }
  
    for (let date = 1; date <= daysInMonth; date++) {
      const fullDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
      const log = logs.find(log => log.date === fullDate);
  
      calendarContainer.innerHTML += `
        <div class="calendar-date">
          ${date}
          ${log ? `<div class="log">${log.content}</div>` : ''}
        </div>
      `;
    }
  }
  
  generateCalendar(currentMonth, currentYear);
  