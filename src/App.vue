<template>
  <HeaderVue />
  <router-view/>
  <FooterVue />
</template>


<script>
import HeaderVue from '@/components/HeaderVue';
import FooterVue from '@/components/FooterVue';

export default {
  data() {

  },

  name: 'App',
  components: {
    HeaderVue,
    FooterVue
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  margin: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body{
 -ms-overflow-style: none;
 font-family: 'SamsungOne', sans-serif !important;
 }
 
::-webkit-scrollbar {
  display: none;
}
.v-application {
  font-family: 'SamsungOne', sans-serif !important;
}
@font-face {
  font-family:'SamsungOne';
  src: url('@/assets/fonts/SamsungOne-400.ttf') format('truetype');
  font-weight: 400;
}
</style>
