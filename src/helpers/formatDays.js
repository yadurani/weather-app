import moment from 'moment'

export const formatDay = (date) => {
  const format = 'ddd[.] D MMM'
  return moment(date).format(format)
}

export const nameDay = (date, i) => {
  if (i !== 0) return formatDay(date)
  return 'Tomorrow'
}
