<template>
  <div class="appContainer">
    <div class="appIconContainer">
      <img class="appIcon" src="@/assets/img/icon/11번가.png" alt="">
    </div>
    <div class="appName">{{ name }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "fsdjio",
      icon: "@/assets/img/icon/11번가.png",
    }
  }
}
</script>

<style scoped>
.appContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.appIconContainer {
  width: 60px;
  height: 60px;
  border: 0px;
  border-radius: 20px;
}

.appIcon {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

.appName {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
}
</style>