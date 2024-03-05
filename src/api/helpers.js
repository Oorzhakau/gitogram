const addStartingZero = (value) => value < 10 ? `0${value}` : `${value}`

const formatDate = (dateString) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  console.log(dateString)
  const date = new Date(dateString)
  const day = date.getDate()
  const month = months[date.getMonth()]

  return `${day} ${month}`
}

export { addStartingZero, formatDate }
