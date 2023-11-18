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

  created() {
    console.log(this.application)
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
  align-items: flex-start;
  font-size: .6rem;
  padding: .3rem;
  color: white;
  width: 60px;
  height: 40px;
  flex-wrap: wrap;
}
</style>