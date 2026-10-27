 const months = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
  const days = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
 
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
 
  document.getElementById('title').textContent = months[month] + ' ' + year;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
  let html = '<tr>';
  days.forEach((d, i) => {
    html += `<th class="${i >= 5 ? 'weekend' : ''}">${d}</th>`;
  });
  html += '</tr><tr>';

  for (let i = 0; i < firstDay; i++) html += '<td></td>';
 
  let col = firstDay;
  for (let day = 1; day <= daysInMonth; day++) {
    const classes = [];
    if (col >= 5) classes.push('weekend');
    if (day === now.getDate()) classes.push('today');
    html += `<td class="${classes.join(' ')}">${day}</td>`;
    col++;
    if (col === 7 && day < daysInMonth) {
      html += '</tr><tr>';
      col = 0;
    }
  }
  while (col > 0 && col < 7) { html += '<td></td>'; col++; }
  html += '</tr>';
 
  document.getElementById('calendar').innerHTML = html;