<template>
  <header>
    <div class="program-icon">
      <a href="/"> <img src="@/assets/logo.png" alt="icon" /></a>
    </div>
    <div class="program-title">
      <a href="/"> <h2 class="program-title-word">We Care All, To UI</h2></a>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

header {
  margin: 0;
  padding: 0;
  height: 300px;
}

a {
  text-decoration: none;
  color: black;
}

img {
  width: 20rem;
}

.program-icon {
  display: flex;
  justify-content: center;
}

.program-title {
  margin: 16px 0;
}

h2 {
  margin: 0;
}
</style>