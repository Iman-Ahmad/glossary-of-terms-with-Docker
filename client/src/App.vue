<script>
  import Header from './components/Header.vue';
  import 'remixicon/fonts/remixicon.css';

  export default {
    components: {
      Header,
    },
    setup() {
      return {
      }
    }
  }
</script>

<template>
  <header>
    <Header></Header>
  </header>

  <RouterView />
</template>

