<template>
  <div class="appTotalContainer">
    <div class="appIconContainer">
      <img class="appIcon" :src="this.application.src" alt="">
    </div>
    <div class="appName">{{ this.application.name }}</div>
  </div>

</template>

<script>
//import AppMemoVue from "@/components/AppMemoVue.vue";
export default {
  name: "ApplicationVue",
  props: {
    application: {
      type: Object,
      default: () => {
        return {
          name: "",
          src: "",
          function:"",
          color:"",
          company:"",
          numCnt:0,
        }
      }
    }
  },
  data() {
    return {
      text: "",
      isEdit: false,
    }
  },

  methods: {

  },
  components: {
  },
}
</script>

<style scoped>
.appTotalContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;
}
.appIconContainer {
  width: 50px;
  height: 50px;
  border: 0px;
}

.appIcon {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

.appName {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: .7rem;
  padding: .3rem;
  color: white;
  width: 70px;
  height: 40px;
  flex-wrap: wrap;
  font-weight: 500;

}
</style>