<template>
  <div class="phone searchbar">
    <input class="search" type="text" placeholder="검색">
    <font-awesome-icon class="top-item" style="color: gray;" :icon="['fas', 'ellipsis-vertical']" />
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

.searchbar {
  height: 40px;
  background: #D9D9D9;
  border-radius: 20px;
  width:95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border: 0px;
  opacity: 0.5;
  margin: 0 auto;
}

.search {
  height: 100%;
  background: 0;
  width: 90%;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>