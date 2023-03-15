function createCalendar(elem, year, month) {
  const table = document.createElement('table');
  const daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  const firstDayOfMonth = new Date(year, month - 1, 1).getDay() - 1;
  const lastDayOfMonth = new Date(year, month, 0).getDate();
  let currentDayOfMonth = 1;
  let row = document.createElement('tr');

  daysOfWeek.forEach(day => {
    const th = document.createElement('th');
    th.textContent = day;
    row.appendChild(th);
  });

  table.appendChild(row);
  row = document.createElement('tr');

  for (let i = 0; i < firstDayOfMonth; i++) {
    const td = document.createElement('td');
    row.appendChild(td);
  }

  for (let i = 1; i <= lastDayOfMonth; i++) {
    const td = document.createElement('td');
    td.textContent = currentDayOfMonth;
    currentDayOfMonth++;

    if ((firstDayOfMonth + i - 1) % 7 === 6) {
      table.appendChild(row);
      row = document.createElement('tr');
    }

    row.appendChild(td);
  }

  for (let i = row.children.length; i < 7; i++) {
    const td = document.createElement('td');
    row.appendChild(td);
  }

  table.appendChild(row);
  elem.appendChild(table);
}

createCalendar(document.getElementById('calendar'), 2012, 9);