<template>
  <div class="date" v-text="getDate"></div>
</template>

<script>
import { monthName, weekDayName } from '@/utils/constants'

export default {
  name: 'Date',
  props: {
    date: {
      type: Object,
      required: true
    }
  },
  computed: {
    getDate() {
      let formattedDate = ''
      const date = new Date(
        this.date && this.date.start && this.date.start.localDate
      )
      if (date) {
        const weekday = weekDayName[date.getDay()]
        const month = monthName[date.getMonth()]
        const day = date.getDate()
        const year = date.getFullYear()
        formattedDate = `${weekday}, ${day} ${month} ${year}`
      }
      return formattedDate
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/events-app';

.date {
  color: $color-primary;
  font-weight: 600;
  padding: 4px;
  font-size: 12px;

  @media (min-width: $breakpoint-tablet) {
    font-size: 16px;
  }
}
</style>
