export function intervalTime(bigger, smaller) {
  var interval;

  if (bigger > smaller)
    interval = bigger.getTime() - smaller.getTime();
  else
    interval = smaller.getTime() - bigger.getTime();

  return Math.floor(interval / (1000 * 60 * 60 * 24));
}

export function millisecondToDate(date) {
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

export function convertDateText(date) {
  const beforeDate = new Date(date)
  const year = beforeDate.getFullYear()
  const month = beforeDate.getMonth() + 1
  const day = beforeDate.getDate()
  return `${year}년 ${month}월 ${day}일`
}

export function convertDateDot(date) {
  const beforeDate = new Date(date)
  const year = beforeDate.getFullYear()
  const month = beforeDate.getMonth() + 1
  const day = beforeDate.getDate()
  return `${year}.${month}.${day}`
}