import moment from 'moment'

export const commaFormatter = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const timeFormatterUTC = (dateTime) => {
  let fullDateyear =
    dateTime?.slice(0, 4) +
    '-' +
    dateTime?.slice(4, 6) +
    '-' +
    dateTime?.slice(6, 8) +
    'T' +
    dateTime?.slice(8, 10) +
    ':' +
    dateTime?.slice(10, 12) +
    ':' +
    dateTime?.slice(12, 14) +
    '.000Z'
  let _dateTime = new Date(fullDateyear).toString('YYYYMMDDHHmmss')
  return moment(_dateTime).format('DD-MM-YYYY')
}

// newTimeFormaterAsPerUTCTalkDate(
//     dataItem.messageDate,
//   )
