import moment from 'moment'

export const backFillDays = (lastRecentDay) => {
  let arry = []
  const today = moment();
  const lastRecentMoment = () => moment(lastRecentDay.date);
  const difference = lastRecentMoment().diff(today, 'days') * -1;

  for (let i = 1; i <= difference; i++) {
    // create POST data
    arry.push({
      date: lastRecentMoment().add(i, 'days').toDate(),
      userId: lastRecentDay.userId,
      morningMood: 'neutral',
      afternoonMood: 'neutral',
      nightMood: 'neutral',
    })
  }

  return arry;
}
