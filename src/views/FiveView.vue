<template>
  <div class="phoneContainer5">
    <div class="phone-background5">
      <PhoneTopBarVue />
      <div class="phone searchbar5">
        <input class="search5" type="text" placeholder="검색">
        <font-awesome-icon class="top-item5" style="color: gray; cursor: pointer;" :icon="['fas', 'ellipsis-vertical']" @click="openSelectBoxModal" />
      </div>

      <div class="select-box-modal-wrap5" v-show="selectBoxModalCheck" @click.self="closeSelectBoxModal">
        <SelectBoxView @appSorting="appSorting" @appCategorizing="appCategorizing"/>
      </div>

      <div class="content-middle5">
        <div class="appContainer5">
          <div class="appLine5" v-for="(appList, index) in application" :key="index">
            <div class="appItem5" v-for="(app, i) in appList" :key="i">
              <ApplicationVue v-bind:application="app" />
            </div>
          </div>
        </div>
      </div>
      <PhoneBottomBarVue /> 
    </div>
  </div>
</template>

<script>
import PhoneTopBarVue from '@/components/PhoneTopBarVueBlack.vue';
import PhoneBottomBarVue from '@/components/PhoneBottomBarVueBlack.vue';
import ApplicationVue from '@/components/ApplicationVueBlack';
import SelectBoxView from '@/components/SelectBoxVueFive.vue';

export default {
  components: {
    PhoneTopBarVue,
    PhoneBottomBarVue,
    ApplicationVue,
    SelectBoxView
  },
  data() {
    return {
      selectBoxModalCheck: false,
      application: [],
      applications: [
        {idx: 0, name: "Samsung Health", src: require("@/assets/img/icon/Samsung Health.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 1, name: "더헬스", src: require("@/assets/img/icon/더헬스.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 2, name: "카카오뱅크", src: require("@/assets/img/icon/카카오뱅크.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 3, name: "카카오페이", src: require("@/assets/img/icon/카카오페이.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 4, name: "KB국민은행", src: require("@/assets/img/icon/KB국민은행.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 5, name: "Samsung Pay", src: require("@/assets/img/icon/Samsung Pay.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 6, name: "캘린더", src: require("@/assets/img/icon/캘린더.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 7, name: "내 파일", src: require("@/assets/img/icon/내 파일.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 8, name: "SmartThings", src: require("@/assets/img/icon/SmartThings.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 9, name: "Samsung Notes", src: require("@/assets/img/icon/Samsung Notes.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 10, name: "삼성 음성녹음", src: require("@/assets/img/icon/삼성 음성녹음.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 11, name: "Galaxy Wearable", src: require("@/assets/img/icon/Galaxy Wearable.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 12, name: "Good Lock", src: require("@/assets/img/icon/Good Lock.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 13, name: "Bixby", src: require("@/assets/img/icon/Bixby.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 14, name: "카메라", src: require("@/assets/img/icon/카메라.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 15, name: "갤러리", src: require("@/assets/img/icon/갤러리.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 16, name: "Facebook", src: require("@/assets/img/icon/Facebook.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 17, name: "네이버 메일", src: require("@/assets/img/icon/네이버 메일.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 18, name: "네이버 카페", src: require("@/assets/img/icon/네이버 카페.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 19, name: "카카오톡", src: require("@/assets/img/icon/카카오톡.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 20, name: "SNOW", src: require("@/assets/img/icon/SNOW.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 21, name: "11번가", src: require("@/assets/img/icon/11번가.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 22, name: "AliExpress", src: require("@/assets/img/icon/AliExpress.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 23, name: "coupang", src: require("@/assets/img/icon/coupang.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 24, name: "이마트몰", src: require("@/assets/img/icon/이마트몰.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 25, name: "Instagram", src: require("@/assets/img/icon/Instagram.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 26, name: "당근", src: require("@/assets/img/icon/당근.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 27, name: "YouTube Music", src: require("@/assets/img/icon/YouTube Music.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 28, name: "네이버 지도", src: require("@/assets/img/icon/네이버 지도.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 29, name: "TMAP", src: require("@/assets/img/icon/TMAP.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 30, name: "YouTube", src: require("@/assets/img/icon/YouTube.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 31, name: "Netflix", src: require("@/assets/img/icon/Netflix.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 32, name: "TVING", src: require("@/assets/img/icon/TVING.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 33, name: "컬리", src: require("@/assets/img/icon/컬리.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 34, name: "요기요", src: require("@/assets/img/icon/요기요.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 35, name: "BBQ", src: require("@/assets/img/icon/BBQ.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 36, name: "똑닥", src: require("@/assets/img/icon/똑닥.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 37, name: "삼성서울병원", src: require("@/assets/img/icon/삼성서울병원.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 38, name: "네이버 블로그", src: require("@/assets/img/icon/네이버 블로그.png"), function: 1, color: 2, company: 3, numCnt: 0},
        {idx: 39, name: "KB라이프", src: require("@/assets/img/icon/KB라이프.png"), function: 1, color: 2, company: 3, numCnt: 0},

      ]
    }
  },
  created() {
    let index = -1;
    for (let i = 0; i < this.applications.length; i++) {
      if (i % 4 == 0) {
        index += 1;
        this.application.push([]);
      }
      
      this.application[index].push(this.applications[i]);
    }

    console.log(this.application);
  },
  methods: {
    closeSelectBoxModal : function() {
      this.selectBoxModalCheck = false;
    },

    openSelectBoxModal : function() {
      this.selectBoxModalCheck = true;
    },

    appSorting: function() {
      console.log("sorting selected");
    },

    appCategorizing: function() {
      console.log("Categorizing");
    }
  }
}
</script>

<style>
.phoneContainer5 {
    width: 360px;
    margin: 0 auto;
}
.phone-background5 {
  background: url('@/assets/background/phone-background5.png');
}

.content-middle5 {
  height: 600px;
  overflow: scroll;
  padding-top: 10px;
}


.appContainer5 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: space-around;
  margin: .8rem 10px;
  width: 680px;
  height: 570px;
  flex-wrap: wrap;
  overflow: scroll;
  right: 0;
}

.appLine5 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
}

.appItem5 {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 80px;
  height: 95px;
}

.searchbar5 {
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
  box-sizing: border-box;
}

.search5 {
  height: 100%;
  background: 0;
  width: 90%;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}


.select-box-modal-wrap5 {
  position: absolute;
  left: calc(50% - 180px);
  top: calc(300px);
  width: 360px;
  height: 723px;
  z-index: 20;
}

</style>