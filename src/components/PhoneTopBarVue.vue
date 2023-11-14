<template>
  <div class="phone topbar">
      <div class="topbar-item item-left">{{ now }}</div>
      <div class="topbar-item item-right">
        <font-awesome-icon class="top-item" :icon="['fas', 'wifi']" />
        <font-awesome-icon class="top-item" :icon="['fas', 'signal']" />
        <font-awesome-icon class="top-item" :icon="['fas', 'battery-three-quarters']" rotation=270 />
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    updateNow() {
      let cd = new Date();
      this.now = this.zeroPadding(cd.getHours(), 2) + ":" + this.zeroPadding(cd.getMinutes(), 2);
    },
    zeroPadding(num, digit) {
      let zero = "";
      for (let i = 0; i < digit; i++) {
        zero += 0;
      }
      return (zero + num).slice(-digit);
    }
  },
  created() {
    this.updateNow();
  },
  mounted() {
    setInterval(this.updateNow, 1000);
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}


.topbar {
  margin-top: 20px;
  height: 25px;
  font: white;
  display: flex;
  justify-content:space-between;
  align-items: center;
}

.top-item {
  margin: .1rem;
}

.item-left {
  font-weight: 600;
}


.topbar-item {
  font-size: .8rem;
  margin: 0 .5rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>