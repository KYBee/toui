<template>
  <div class="appContainer">
    <div class="appIconContainer">
      <img class="appIcon" :src="this.application.src" alt="">
    </div>
    <div class="appName">{{ this.application.name }}</div>
  </div>
</template>

<script>
export default {
  name: "ApplicationVue",
  props: {
    application: {
      type: Object,
      default: () => {
        return {
          name: "",
          nickname:"",
          src: "",
          mode: false,
        }
      }
    }
  },
  data() {
    return {
    }
  },
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
  border-radius: 25px;
}

.appIcon {
  width: 100%;
  height: 100%;
  border-radius: 25px;
}

.appName {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .6rem;
  padding: .3rem;
  color: white;
}
</style>