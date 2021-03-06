import { EVENTS_ROUTE } from '@/utils/constants'

export const getEventsList = (eventsList) => {
  let event = {}
  const events = []
  eventsList.forEach((item) => {
    event.name = item.name
    event.date = item.dates
    event.price = getPrice(item)
    event.id = item.id
    event.favorite = false
    event.image = item.images[0].url
    event.url = item.url
    events.push(event)
    event = {}
  })
  return events
}

export const getPrice = (item) => {
  const min = item.priceRanges ? item.priceRanges[0].min : 0
  const max = item.priceRanges ? item.priceRanges[0].max : 0
  return item.priceRanges ? `€${min} - €${max}` : 'Free'
}

export const isEventsPage = (path) => {
  return path === EVENTS_ROUTE
}

export const getImageContext = (image) => {
  const images = require.context('../assets/images', false, /\.png$/)
  return images(`./${image}.png`)
}

export default {
  getEventsList,
  getPrice,
  isEventsPage,
  getImageContext
}
