export function intervalTime(bigger, smaller) {
  var interval;

  if (bigger > smaller)
    interval = bigger.getTime() - smaller.getTime();
  else
    interval = smaller.getTime() - bigger.getTime();

  return Math.floor(interval / (1000 * 60 * 60 * 24));
}

export function convertDate(date) {
  let year = 0;
  let yearRemain = 0;
  let month = 0;
  let monthRemain = 0;

  if (date >= 365) {
    year = Math.floor(date / 365)
  }

  yearRemain = date % 365

  if (yearRemain) {
    month = Math.floor(yearRemain / 30.4)
    monthRemain = yearRemain % 30.4
  }

  return (
    (`${year ? (year + '년 ') : ''}`) +
    (`${month ? (month + '월 ') : ''}`) +
    (`${monthRemain ? (monthRemain + '일') : ''} `)
  )
}