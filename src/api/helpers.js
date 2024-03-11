const addStartingZero = (value) => value < 10 ? `0${value}` : `${value}`

const formatDate = (dateString) => {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  console.log(dateString)
  const date = new Date(dateString)
  const day = date.getDate()
  const month = months[date.getMonth()]

  return `${day} ${month}`
}

export { addStartingZero, formatDate }
