<template>
  <div class="phone bottombar" style="color:black">
    <div><font-awesome-icon :icon="['fas', 'bars']" rotation=90 /></div>
    <div><font-awesome-icon :icon="['far', 'square']" /></div>
    <div><font-awesome-icon :icon="['fas', 'chevron-left']" /></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.bottombar {
  height: 40px;
  display: flex;
  color: white;
  justify-content: space-evenly;
  align-items: center;
}

</style>