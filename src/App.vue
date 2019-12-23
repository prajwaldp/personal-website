<template>
  <div id="app">
    <my-navbar/>
    <router-view/>
    <my-footer/>
  </div>
</template>

<script>
import MyNavbar from '@/components/MyNavbar.vue';
import MyFooter from '@/components/MyFooter.vue';

export default {
  name: 'main-view',

  components: {
    MyNavbar,
    MyFooter,
  },

  data() {
    return {};
  },
};
</script>
