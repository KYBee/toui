<template>
  <div class="phoneContainer">
    <div class="phone-background">
      <div v-if="appSizeModalCheck===false">      
        <PhoneTopBarVue />
        <div class="phone searchbar">
          <input class="search" type="text" placeholder="검색">
          <font-awesome-icon class="top-item" style="color: gray;" :icon="['fas', 'ellipsis-vertical']" @click="openAppSizeModal" />
        </div>
      </div>
      <div v-if="appSizeModalCheck===true">
        <div class="emptybar"></div>
      </div>

    
      <div class="select-box-modal-wrap" v-show="selectBoxModalCheck" @click.self="closeSelectBoxModal">
        <SelectBoxView @appSizing="appSizing"/>
      </div>
      <div class="app-size-modal-wrap" v-show="appSizeModalCheck" @click.self="closeAppSizeModal">
        <div class="sizing-box">
          <div class="sizing-icon">
            <img src="@/assets/appsizing.svg" alt="">
          </div>
          <div class="sizing-title">크기조절</div>
        </div>
        <div class="content-middle">
          <div class="appContainer" v-for="(appPage, index) in application" :key="index">
            <div class="appLine" v-for="(appList, index) in appPage" :key="index">
              <div class="appItem" v-for="(app, i) in appList" :key="i">
                <input type="checkbox" class="appsize-checkbox">
                <label for=""></label>
                <ApplicationVue v-if="app.bigSize !== true" v-bind:application="app" />
                <ApplicationBigVue v-if="app.bigSize === true" v-bind:application="app" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="phone-scroll-middle">
        <div class="appContainer" v-for="(appPage, index) in application" :key="index">
          <div class="appLine" v-for="(appList, index) in appPage" :key="index">
            <div class="appItem" v-for="(app, i) in appList" :key="i">
              <ApplicationVue v-if="app.bigSize !== true" v-bind:application="app" />
              <ApplicationBigVue v-if="app.bigSize === true" v-bind:application="app" />
            </div>
          </div>
        </div>
      </div>
      <PhoneBottomBarVue /> 
    </div>
  </div>

</template>

<script>
import PhoneTopBarVue from '@/components/PhoneTopBarVue.vue';
import PhoneBottomBarVue from '@/components/PhoneBottomBarVue.vue';
import ApplicationVue from '@/components/ApplicationVue';
import ApplicationBigVue from '@/components/ApplicationBigVue';
import SelectBoxView from "@/components/SelectBoxVue.vue";

export default {
  components: {
    PhoneTopBarVue,
    PhoneBottomBarVue,
    ApplicationVue,
    ApplicationBigVue,
    SelectBoxView,
  },
  data() {
    return {
      selectBoxModalCheck: false,
      appSizeModalCheck: true,
      application:[
        [],
      ],
      empty: {idx: 1000, name: " ", src: require("@/assets/img/icon/empty.png"), function: 1, color: 2, company: 3, numCnt: 0},
      applications: [
        {idx: 0, name: "Samsung Health", src: require("@/assets/img/icon/Samsung Health.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 1, name: "더헬스", src: require("@/assets/img/icon/더헬스.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 3, name: "카카오페이", src: require("@/assets/img/icon/카카오페이.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 4, name: "KB국민은행", src: require("@/assets/img/icon/KB국민은행.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 5, name: "Samsung Pay", src: require("@/assets/img/icon/Samsung Pay.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 6, name: "캘린더", src: require("@/assets/img/icon/캘린더.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 7, name: "내 파일", src: require("@/assets/img/icon/내 파일.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 8, name: "SmartThings", src: require("@/assets/img/icon/SmartThings.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 9, name: "Samsung Notes", src: require("@/assets/img/icon/Samsung Notes.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 10, name: "삼성 음성녹음", src: require("@/assets/img/icon/삼성 음성녹음.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 12, name: "Good Lock", src: require("@/assets/img/icon/Good Lock.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 11, name: "Galaxy Wearable", src: require("@/assets/img/icon/Galaxy Wearable.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 14, name: "카메라", src: require("@/assets/img/icon/카메라.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 17, name: "네이버 메일", src: require("@/assets/img/icon/네이버 메일.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 18, name: "네이버 카페", src: require("@/assets/img/icon/네이버 카페.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 19, name: "카카오톡", src: require("@/assets/img/icon/카카오톡.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 20, name: "SNOW", src: require("@/assets/img/icon/SNOW.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 21, name: "11번가", src: require("@/assets/img/icon/11번가.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
      ]
    }
  },
  created() {
    let page = 0;
    let index = -1;
    
    for (let i = 0; i < this.applications.length; i++) {
      if (i % 4 === 0) {
        index += 1;
        
        if (index === 6) {
          page += 1;
          index = 0;
        }
        
        this.application[page].push([]);
      }

      this.application[page][index].push(this.applications[i]);
    }
  },
  methods: {
    closeSelectBoxModal : function() {
      this.selectBoxModalCheck = false;
    },

    openSelectBoxModal : function() {
      this.selectBoxModalCheck = true;
    },

    appSizing: function() {

      console.log("appSizing");
    },

    openAppSizeModal: function() {
      this.appSizeModalCheck = true;
    },

    closeAppSizeModal : function() {
      this.appSizeModalCheck = false;
    },
  }
}
</script>

<style>
.phoneContainer {
    width: 360px;
    margin: 0 auto;
}
.phone-background {
  background: url('@/assets/phone-background.png');
}

.phone-scroll-middle {
  height: 620px;
}

.appContainer {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  width: 360px;
  height: 580px;
}

.content-middle {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  width: 360px;
}

.appLine {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  
}

.appItem {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 80px;
  height: 95px;
}


.searchbar {
  box-sizing: border-box;

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

.select-box-modal-wrap {
  position: absolute;
  left: calc(50% - 180px);
  top: calc(300px);
  width: 360px;
  height: 723px;
  z-index: 20;
}

.app-size-modal-wrap {
  position: absolute;
  left: calc(50% - 180px);
  top: calc(300px);
  width: 360px;
  height: 723px;
  z-index: 20;
}

.emptybar{
  width: 100%;
  height: 70px;
}

.sizing-box {
  width: 90%;
  margin: 0 auto;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 20px;
  height: 60px;
  margin: 10px auto auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.sizing-title {
  color: white;
  font-size: .8rem;
}

</style>