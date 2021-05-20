export function timeWork() {
  let data = JSON.parse(localStorage.getItem('dataList'));

  let formState = !timeComparison(Object.keys(data[data.length - 1])[0])

  return [data, formState, (newData) => {
    data.push(newData);
    localStorage.setItem('dataList', JSON.stringify(data));
  }]
}
