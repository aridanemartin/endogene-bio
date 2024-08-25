export function getFormattedDate(dateString) {
  // Parse the date string into a Date object
  const dateObj = new Date(dateString)

  // Define an array of month names
  const monthNames = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ]

  // Get the month and year
  const month = monthNames[dateObj.getUTCMonth()]
  const year = dateObj.getUTCFullYear()

  // Return the formatted date as "Month, Year"
  return { month, year }
}
