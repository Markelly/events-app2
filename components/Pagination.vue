<template>
  <paginate
    :page-count="totalPages"
    :click-handler="gotoPage"
    prev-text="Previous"
    next-text="Next"
    container-class="pagination"
    page-class="pagination__item"
    prev-class="pagination__item"
    next-class="pagination__item"
    data-pagination
  />
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    totalPages: {
      type: Number,
      default: 0
    }
  },
  methods: {
    gotoPage(page) {
      this.$emit('click', page)
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/events-app';

.pagination {
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  color: $color-secondary;
  padding: 0;
  font-weight: 600;
  margin: 48px 12px;

  &__item {
    border-radius: 6px;
    padding: 8px 16px;
  }

  .active,
  &__item:hover {
    background-color: $color-secondary;
    color: $color-light-green;
  }

  .disabled,
  .disabled:hover {
    color: $color-light-gray;
    background: $color-white;
    cursor: not-allowed;
  }
}

.active,
.pagination__item:hover {
  background-color: $color-secondary;
  color: $color-light-green;
}
</style>
