import moment from 'moment'

export const moods = ['happy', 'sad', 'mad', 'anxious', 'neutral']

export const getWeekDays = (daysArray) => daysArray.map(d => {
  return moment(d.date).format('dddd')
})

// this is the bar chart column data
// accepts the day records from the database
export const createMoodColumns = (daysArray) => {
  const getCountsForMood = (mood) => daysArray.map(d => {
    // count happy's
    let count = 0;
    if (d.morningMood === mood) count++;
    if (d.afternoonMood === mood) count++;
    if (d.nightMood === mood) count++;
    return count;
  })

  const columns = moods.map(m => {
    const counts = getCountsForMood(m);
    return [m, ...counts]
  })

  return columns
}
