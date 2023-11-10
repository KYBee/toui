<template>
  <HeaderVue />
  <nav>
    <router-link to="/">홈화면</router-link> |
    <router-link to="/one">첫번째</router-link> |
    <router-link to="/two">두번째</router-link> |
    <router-link to="/three">세번째</router-link> |
    <router-link to="/four">네번째</router-link> |
    <router-link to="/five">다섯번째</router-link>
  </nav>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
