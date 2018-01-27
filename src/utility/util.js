import moment from 'moment'

const morning = [0, 11]
const afternoon = [11, 16]
const night = [16, 23]

const currentHour = moment().hour();

const matchesRange = (range, currentHour) => {
  const isNightRange = range[1] === 23;
  if (currentHour >= range[0] && currentHour < range[1]) {
    return true;
  }
  if (isNightRange && currentHour === 23) return true;
  return false;
}

export const isMorning = matchesRange(morning, currentHour);
export const isAfternoon = matchesRange(afternoon, currentHour);
export const isNight = matchesRange(night, currentHour);


export const whatTimeOfDay = () => {
  if (isMorning) return 'morning'
  if (isAfternoon) return 'afternoon'
  if (isNight) return 'night'
}
