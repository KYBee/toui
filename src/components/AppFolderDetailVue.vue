<template>
  <div class="app-folder-detail-view" @click="closeModal">
    <div class="folder-name">{{ this.name }}</div>
    <div class="folder-container">
      <div class="folder-application">
        <div v-for="(item, index) in this.apps" :key="index" class="recAppId">
          <ApplicationVue v-bind:application="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApplicationVue from "@/components/ApplicationVue.vue";
export default {
  components: {
    ApplicationVue,
  },
  props: {
    apps: {
      type: Array,
      default: () => {
        return [];
      }
    },
    name: {
      default: () => {
        return "";
      }
    },
  },

  methods: {
    closeModal: function() {
      this.$emit("closeFolderDetailView");
    }
  },
}
</script>

<style scoped>
.app-folder-detail-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(6px);
  position: absolute;
  z-index: 100;
}

.folder-container {
  width: 360px;
  height: 680px;
  background: white;
  border-radius: 25px 25px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
}

.folder-name {
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  padding-top: 30px;
}

.folder-container {
  width: 320px;
  margin: 0 auto;
  height: 430px;
  border-radius: 25px;
  background: #dac8eb;
}

.folder-application {
  width: 270px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 30px 20px 30px 20px;
  overflow: hidden;
}

.recAppId {
  margin: 0 5px;
}
</style>