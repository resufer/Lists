export function timeWork() {
  let data = JSON.parse(localStorage.getItem('dataList'));

  let formState = !timeComparison(Object.keys(data[data.length - 1])[0])

  return [data, formState, (newData) => {
    data.push(newData);
    localStorage.setItem('dataList', JSON.stringify(data));
  }]
}

function timeComparison(prevDate) {
  let [prevDay, prevMonth, prevYear] = prevDate.split('.');

  let currentDate = new Date();
  let [currentDay, currentMonth, currentYear] = [currentDate.getDate(), currentDate.getMonth() + 1, currentDate.getFullYear()];

  return (+prevDay === currentDay) && (+prevMonth === currentMonth) && (+prevYear === currentYear)
}

export function initialize() {
  let data = localStorage.getItem('dataList');
  if (!data) {
    data = [{'The requirements': [
      { 'Common': "0:30" },
      { 'Theory': "0:30" },
      { 'Practice': "3:00" }
    ]}]
    localStorage.setItem('dataList', JSON.stringify(data));
  }
}
