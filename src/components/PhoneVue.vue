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
      <div class="appContainer">
        <div class="appLine">
          <div v-for="(item, index) in applications1" v-bind:key="index" class="appItem"><AppVue v-bind:application="item" /></div>
        </div>
        <div class="appLine">
          <div v-for="(item, index) in applications2" v-bind:key="index" class="appItem"><AppVue v-bind:application="item" /></div>
        </div>
        <div class="appLine">
          <div v-for="(item, index) in applications3" v-bind:key="index" class="appItem"><AppVue v-bind:application="item" /></div>
        </div>
        <div class="appLine">
          <div v-for="(item, index) in applications4" v-bind:key="index" class="appItem"><AppVue v-bind:application="item" /></div>
        </div>
      </div>
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
      applications1: [],
      applications2: [],
      applications3: [],
      applications4: [],
      appList: [
        {name: "AliExpress", nickname: "AliExpress", src: require("@/assets/img/icon/AliExpress.png"), mode: false},
        {name: "이마트에브리데이", nickname: "이마트에브리데이", src: require("@/assets/img/icon/이마트에브리데이.png"), mode: false},
        {name: "이마트몰", nickname: "이마트몰", src: require("@/assets/img/icon/이마트몰.png"), mode: false},
        {name: "이마트", nickname: "이마트", src: require("@/assets/img/icon/이마트.png"), mode: false},
        {name: "NH스마트뱅킹", nickname: "NH스마트뱅킹", src: require("@/assets/img/icon/NH스마트뱅킹.png"), mode: false},
        {name: "Chrome", nickname: "Chrome", src: require("@/assets/img/icon/Chrome.png"), mode: false},
        {name: "TVING", nickname: "TVING", src: require("@/assets/img/icon/TVING.png"), mode: false},
        {name: "G마켓", nickname: "G마켓", src: require("@/assets/img/icon/G마켓.png"), mode: false},
        {name: "KB라이프", nickname: "KB라이프", src: require("@/assets/img/icon/KB라이프.png"), mode: false},
        {name: "KB국민은행", nickname: "KB국민은행", src: require("@/assets/img/icon/KB국민은행.png"), mode: false},
        {name: "KB증권", nickname: "KB증권", src: require("@/assets/img/icon/KB증권.png"), mode: false},
        {name: "LINE", nickname: "LINE", src: require("@/assets/img/icon/LINE.png"), mode: false},
        {name: "Spotv", nickname: "Spotv", src: require("@/assets/img/icon/Spotv.png"), mode: false},
        {name: "Samsung Health", nickname: "Samsung Health", src: require("@/assets/img/icon/Samsung Health.png"), mode: false},
        {name: "왓챠", nickname: "왓챠", src: require("@/assets/img/icon/왓챠.png"), mode: false},
        {name: "Samsung Pay", nickname: "Samsung Pay", src: require("@/assets/img/icon/Samsung Pay.png"), mode: false},
        {name: "SmartThings", nickname: "SmartThings", src: require("@/assets/img/icon/SmartThings.png"), mode: false},
        {name: "Sound Cloud", nickname: "Sound Cloud", src: require("@/assets/img/icon/Sound Cloud.png"), mode: false},
      ]
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

    let index = -1;
    for (let i = 0; i < this.appList.length; i++) {
      if (i % 4 == 0) {
        index++;
      }

      if (index == 0) {
        this.applications1.push(this.appList[i]);
      } else if (index == 1) {
        this.applications2.push(this.appList[i]);
      } else if (index == 2) {
        this.applications3.push(this.appList[i]);
      } else if (index == 3) {
        this.applications4.push(this.appList[i]);
      }
    }
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

.appContainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  margin: .8rem auto;
  width: 320px;
}

.appLine {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.appItem {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 80px;
  height: 95px;
}

</style>