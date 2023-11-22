<template>
  <div class="appTotalContainer" @click="appFolderDetailOpen">
    <div class="appIconContainer">
    </div>
    <div class="appIconCompress">
      <div class="appIconImg" v-for="(app, index) in appDisplay" :key="index">
        <img :src="app.src" alt="">
      </div>
    </div>
    <div class="appName">{{ this.folderName }}</div>
  </div>
  <div class="appFolderDetail" v-show="appFolderDetailCheck">
    <AppFolderDetailVue @closeFolderDetailView="appFolderDetailClose" v-bind:apps="this.apps" v-bind:name="this.folderName"/>
  </div>
</template>

<script>
import AppFolderDetailVue from './AppFolderDetailVue.vue';
export default {
  components: {
    AppFolderDetailVue
  },
  data() {
    return {
      appFolderDetailCheck:false,
      folderName:"",
      apps:[],
      appDisplay:[],
      applicationsOriginal: [
      {idx: 1, name: "Samsung Health", src: require("@/assets/img/icon/Samsung Health.png"), function: 1, color: 10, company: 1, numCnt: 100, op: 0},
        {idx: 2, name: "더헬스", src: require("@/assets/img/icon/더헬스.png"), function: 1, color: 10, company: 1, numCnt: 200, op: 0},
        {idx: 3, name: "카카오뱅크", src: require("@/assets/img/icon/카카오뱅크.png"), function: 2, color: 2, company: 3, numCnt: 300, op: 0},
        {idx: 0, name: "카카오페이", src: require("@/assets/img/icon/카카오페이.png"), function: 2, color: 2, company: 3, numCnt: 500, op: 0},
        {idx: 7, name: "KB국민은행", src: require("@/assets/img/icon/KB국민은행.png"), function: 2, color: 2, company: 6, numCnt: 120, op: 0},
        {idx: 8, name: "Samsung Pay", src: require("@/assets/img/icon/Samsung Pay.png"), function: 2, color: 3, company: 1, numCnt: 130, op: 0},
        {idx: 9, name: "캘린더", src: require("@/assets/img/icon/캘린더.png"), function: 3, color: 3, company: 1, numCnt: 160, op: 0},
        {idx: 10, name: "내 파일", src: require("@/assets/img/icon/내 파일.png"), function: 3, color: 2, company: 1, numCnt: 180, op: 0},
        {idx: 5, name: "SmartThings", src: require("@/assets/img/icon/SmartThings.png"), function: 3, color: 4, company: 1, numCnt: 220, op: 0},
        {idx: 4, name: "Samsung Notes", src: require("@/assets/img/icon/Samsung Notes.png"), function: 3, color: 1, company: 1, numCnt: 240, op: 0},
        {idx: 6, name: "음성 녹음", src: require("@/assets/img/icon/삼성 음성녹음.png"), function: 3, color: 1, company: 1, numCnt: 260, op: 0},
        {idx: 16, name: "Galaxy Wearable", src: require("@/assets/img/icon/Galaxy Wearable.png"), function: 3, color: 3, company: 1, numCnt: 350, op: 0},
        {idx: 13, name: "Good Lock", src: require("@/assets/img/icon/Good Lock.png"), function: 3, color: 1, company: 1, numCnt: 320, op: 0},
        {idx: 12, name: "Bixby", src: require("@/assets/img/icon/Bixby.png"), function: 3, color: 10, company: 1, numCnt: 420, op: 0},
        {idx: 14, name: "카메라", src: require("@/assets/img/icon/카메라.png"), function: 3, color: 1, company: 1, numCnt: 80, op: 0},
        {idx: 11, name: "Facebook", src: require("@/assets/img/icon/Facebook.png"), function: 4, color: 3, company: 4, numCnt: 510, op: 0},
        {idx: 17, name: "네이버 메일", src: require("@/assets/img/icon/네이버 메일.png"), function: 4, color: 4, company: 5, numCnt: 170, op: 0},
        {idx: 19, name: "네이버 카페", src: require("@/assets/img/icon/네이버 카페.png"), function: 4, color: 4, company: 5, numCnt: 370, op: 0},
        {idx: 18, name: "카카오톡", src: require("@/assets/img/icon/카카오톡.png"), function: 4, color: 2, company: 3, numCnt: 470, op: 0},
        {idx: 20, name: "SNOW", src: require("@/assets/img/icon/SNOW.png"), function: 10, color: 4, company: 10, numCnt: 520, op: 0},
        {idx: 21, name: "11번가", src: require("@/assets/img/icon/11번가.png"), function: 5, color: 1, company: 10, numCnt: 600, op: 0},
        {idx: 27, name: "AliExpress", src: require("@/assets/img/icon/AliExpress.png"), function: 5, color: 1, company: 10, numCnt: 650, op: 0},
        {idx: 24, name: "이마트몰", src: require("@/assets/img/icon/이마트몰.png"), function: 5, color: 2, company: 10, numCnt: 670, op: 0},
        {idx: 25, name: "Instagram", src: require("@/assets/img/icon/Instagram.png"), function: 7, color: 10, company: 4, numCnt: 68, op: 0},
        {idx: 26, name: "당근", src: require("@/assets/img/icon/당근.png"), function: 5, color: 4, company: 10, numCnt: 110, op: 0},
        {idx: 22, name: "YouTube Music", src: require("@/assets/img/icon/YouTube Music.png"), function: 10, color: 4, company: 2, numCnt: 40, op: 0},
        {idx: 28, name: "네이버 지도", src: require("@/assets/img/icon/네이버 지도.png"), function: 6, color: 4, company: 5, numCnt: 390, op: 0},
        {idx: 29, name: "TMAP", src: require("@/assets/img/icon/TMAP.png"), function: 6, color: 4, company: 10, numCnt: 490, op: 0},
        {idx: 30, name: "YouTube", src: require("@/assets/img/icon/YouTube.png"), function: 7, color: 4, company: 2, numCnt: 290, op: 0},
        {idx: 31, name: "Netflix", src: require("@/assets/img/icon/Netflix.png"), function: 7, color: 10, company: 10, numCnt: 190, op: 0},
        {idx: 32, name: "TVING", src: require("@/assets/img/icon/TVING.png"), function: 7, color: 1, company: 10, numCnt: 150, op: 0},
        {idx: 33, name: "컬리", src: require("@/assets/img/icon/컬리.png"), function: 8, color: 10, company: 10, numCnt: 680, op: 0},
        {idx: 34, name: "요기요", src: require("@/assets/img/icon/요기요.png"), function: 8, color: 1, company: 10, numCnt: 630, op: 0},
        {idx: 35, name: "BBQ", src: require("@/assets/img/icon/BBQ.png"), function: 8, color: 1, company: 10, numCnt: 720, op: 0},
        {idx: 36, name: "똑닥", src: require("@/assets/img/icon/똑닥.png"), function: 9, color: 2, company: 10, numCnt: 750, op: 0},
        {idx: 37, name: "삼성서울병원", src: require("@/assets/img/icon/삼성서울병원.png"), function: 9, color: 4, company: 10, numCnt: 780, op: 0},
        {idx: 38, name: "네이버 블로그", src: require("@/assets/img/icon/네이버 블로그.png"), function: 4, color: 4, company: 5, numCnt: 20, op: 0},
        {idx: 39, name: "KB라이프", src: require("@/assets/img/icon/KB라이프.png"), function: 2, color: 2, company: 6, numCnt: 270, op: 0},
         ],
      name : [
        [],
        [
          "",
          "건강/운동",
          "금융",
          "기본",
          "소셜",
          "쇼핑",
          "지도",
          "엔터테인먼트",
          "식음료",
          "의료"
        ],
        [
          "",
          "빨강",
          "노랑",
          "파랑",
          "하양"
        ],
        [
          "",
          "삼성",
          "YouTube",
          "카카오",
          "Meta",
          "네이버",
          "KB국민은행"
        ],
      ]
    }
  },
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
    },
    appList: {
      type: Array,
      default () {
        return []
      }
    },
    sortingOption: {
      type: Number,
      default () {
        return 0;
      }
    }
  },
  created() {

    this.apps = [];
    this.appDisplay = [];

    //기능
    if (this.application.name === "000") {
      this.folderName = this.name[1][this.application.function];

      for (let i = 0; i < this.applicationsOriginal.length; i++) {
        for (let j = 0; j < this.appList.length; j++) {
          if (this.applicationsOriginal[i].idx == this.appList[j]) {
            this.apps.push(this.applicationsOriginal[i]);
          }
        }
      }

      let index = 0;
      
      for (let item of this.apps) {
        this.appDisplay.push(item);

        if (index < 8) index += 1;
        else break;
      }
    }

    //색깔
    if (this.application.name === "001") {
      this.folderName = this.name[2][this.application.color];

      for (let i = 0; i < this.applicationsOriginal.length; i++) {
        for (let j = 0; j < this.appList.length; j++) {
          if (this.applicationsOriginal[i].idx == this.appList[j]) {
            this.apps.push(this.applicationsOriginal[i]);
          }
        }
      }

      let index = 0;
      
      for (let item of this.apps) {
        this.appDisplay.push(item);

        if (index < 8) index += 1;
        else break;
      }
    }

    //회사
    if (this.application.name === "002") {
      this.folderName = this.name[3][this.application.company];

      for (let i = 0; i < this.applicationsOriginal.length; i++) {
        for (let j = 0; j < this.appList.length; j++) {
          if (this.applicationsOriginal[i].idx == this.appList[j]) {
            this.apps.push(this.applicationsOriginal[i]);
          }
        }
      }

      let index = 0;
      
      for (let item of this.apps) {
        this.appDisplay.push(item);

        if (index < 8) index += 1;
        else break;
      }
    }

    if (this.sortingOption === 1) {
      this.appDisplay.sort(function (a, b) {
        return a.name < b.name ? -1 : a.name > b.name ? 1: 0;
      })
      this.apps.sort(function (a, b) {
        return a.name < b.name ? -1 : a.name > b.name ? 1: 0;
      })
    } else if (this.sortingOption === 2) {
      this.appDisplay.sort(function (a, b) {
        return a.idx - b.idx;
      })
      this.apps.sort(function (a, b) {
        return a.idx - b.idx;
      })
    } else if (this.sortingOption === 3) {
      this.appDisplay.sort(function (a, b) {
        return b.numCnt - a.numCnt;
      });
      this.apps.sort(function (a, b) {
        return b.numCnt - a.numCnt;
      });
    }

  },
  methods: {
    appFolderDetailOpen: function() {
      this.appFolderDetailCheck = true;
    },

    appFolderDetailClose: function() {
      this.appFolderDetailCheck = false;
    },

  }
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
  border-radius: 20px;
  background: #dac8eb;
  border: 0px;
}


.appIcon {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  position: relative;
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

.appIconImg {
  width: 11px;
  height: 11px;
  margin: 1px;
}

.appIconImg > img {
  width: 100%;
  border-radius: 5px;
}

.appIconCompress {
  width: 40px;
  height: 0;
  display: flex;
  justify-content: flex-start;
  flex-wrap : wrap;
  z-index: 2;
  position: relative;
  top: -48px;
}

.appFolderDetail {
  position: absolute;
  left: calc(50% - 180px);
  top: 300px;
  height: 730px;
  width: 360px;
}
</style>