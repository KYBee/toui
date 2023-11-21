<template>
  <div class="phone searchbar">
    <input class="search" type="text" placeholder="검색">
    <font-awesome-icon class="top-item" style="color: white;" :icon="['fas', 'ellipsis-vertical']" />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.searchbar {
  box-sizing: border-box;
  height: 40px;
  background: #dac8eb;
  border-radius: 20px;
  width:95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border: 0px;
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
  font-size: .9rem;
  font-weight: 700;
}

.search::placeholder {
  color: white;
}
</style>