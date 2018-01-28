import moment from 'moment'

export const moods = ['happy', 'sad', 'mad', 'anxious', 'neutral']

export const getWeekDays = (daysArray) => daysArray.map(d => {
  return moment(d.date).format('dddd')
})

export const getMoodCounts = (day) => {
  const getCount = (mood) => {
    let count = 0;
    if (day.morningMood === mood) count++;
    if (day.afternoonMood === mood) count++;
    if (day.nightMood === mood) count++;
    return count;
  }
  return [
    ['happy', getCount('happy')],
    ['mad', getCount('mad')],
    ['sad', getCount('sad')],
    ['anxious', getCount('anxious')],
    ['neutral', getCount('neutral')]
  ];
}

export const moodOfTheDay = (day) => {
  const theCount = getMoodCounts(day);
  if (theCount[0][1] >= 2) return 'happy';
  if (theCount[1][1] >= 2) return 'mad';
  if (theCount[2][1] >= 2) return 'sad';
  if (theCount[3][1] >= 2) return 'anxious';
  return 'neutral';
}

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
