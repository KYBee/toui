<template>
  <div class="phone-background">
    <div class="phone topbar">
      <div class="topbar-item item-left">{{ now }}</div>
      <div class="topbar-item item-right">
        <font-awesome-icon class="top-item" :icon="['fas', 'wifi']" />
        <font-awesome-icon class="top-item" :icon="['fas', 'signal']" />
        <font-awesome-icon class="top-item" :icon="['fas', 'battery-three-quarters']" rotation=270 />
      </div>
    </div>
    <div class="phone searchbar">
      <input class="search" type="text" placeholder="검색">
      <font-awesome-icon class="top-item" style="color: gray;" :icon="['fas', 'ellipsis-vertical']" />
    </div>
    <div class="phone middle">
      <AppVue />
    </div>
    <div class="phone bottombar">
      <div><font-awesome-icon :icon="['fas', 'bars']" rotation=90 /></div>
      <div><font-awesome-icon :icon="['far', 'square']" /></div>
      <div><font-awesome-icon :icon="['fas', 'chevron-left']" /></div>
    </div>
  </div>
</template>

<script>
import AppVue from "@/components/ApplicationVue.vue";

export default {
  data() {
    return {
      now: 0,
      applications: [
        ["AliExpress", "AliExpress", "파일경로", false],
        ["이마트에브리데이", "이마트에브리데이", "파일경로", false],
        ["이마트몰", "이마트몰", "파일경로", false],
        ["이마트", "이마트", "파일경로", false],
        ["올원뱅크", "올원뱅크", "파일경로", false],
        ["NH스마트뱅킹", "NH스마트뱅킹", "파일경로", false],
        ["Chrome", "Chrome", "파일경로", false],
        ["토스", "토스", "파일경로", false],
        ["G마켓", "G마켓", "파일경로", false],
        ["KB라이프", "KB라이프", "파일경로", false],
        ["KB국민은행", "KB국민은행", "파일경로", false],
        ["KB증권", "KB증권", "파일경로", false],
        ["LINE", "LINE", "파일경로", false],
        ["Netflix", "Netflix", "파일경로", false],
        ["Samsung Health", "Samsung Health", "파일경로", false],
        ["왓챠", "왓챠", "파일경로", false],
        ["Samsung Pay", "Samsung Pay", "파일경로", false],
        ["SmartThings", "SmartThings", "파일경로", false],
        ["Sound Cloud", "Sound Cloud", "파일경로", false],
      ],
    }
  },
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
  },
  components: {
    AppVue,
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.phone-background {
  background: url('@/assets/phone-background.png');
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


.middle {
  height: 600px;
}

.bottombar {
  height: 40px;
  display: flex;
  color: white;
  justify-content: space-evenly;
  align-items: center;
}

.phone {
}

</style>