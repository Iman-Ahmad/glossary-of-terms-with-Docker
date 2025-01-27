<template>
  <div class="header-bar">
    <nav>
      <ul class="nav-links">
        <li><router-link to="/">Словарь</router-link></li>
        <li><router-link to="/semantic">Семантический граф</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>

export default {
  name: "Header",
}
</script>

<style scoped>

</style>
