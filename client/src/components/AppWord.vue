<template>
  <div class="glossary-item">
      <div class="glossary-item__name">
        {{ word }}
      </div>
      <div class="glossary-item__value">
        {{ value }}
      </div>
  </div>
</template>

<script>
export default {
  name: "AppWord",
  props: [
      'word', 'value',
  ],
}
</script>

<style scoped>

</style>
