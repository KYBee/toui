<template>
  <div class="app-folder-detail-view">
    <div class="folder-name">폴더 이름</div>
    <div class="folder-container">
      
    </div>
  </div>
</template>

<script>
export default {
  props: {
    apps: {
      type:Array,
      default: () => {
        return [];
      }
    }
  },

  created() {
    console.log(this.apps);
  }
}
</script>

<style scoped>
.app-folder-detail-view {
  width: 360px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: black;
  position: absolute;
}

.folder-name {
  width: 300px;
  height: 250px;
}

.folder-container {
  width: 320px;
  margin: 0 auto;
  height: 400px;
  border-radius: 25px;
}
</style>