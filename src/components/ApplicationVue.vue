<template>
  <div class="appContainer">
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
          nickname:"",
          src: "",
          mode: false,
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
    edit: function() {
      this.isEdit = !this.isEdit;
    },
    changeName: function (e) {
      this.isEdit=true;
      this.application.mode != this.application.mode;

      console.log(e);
      console.log(this.application.mode)
      console.log("clicked")
      console.log(this.application.idx);
      this.$emit("changeName", this.application.idx, e.value);
    },

  },
  components: {
    //AppMemoVue,
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
  align-items: center;
  font-size: .6rem;
  padding: .3rem;
  color: white;
}
</style>