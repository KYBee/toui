<template>
  <div class="phone-background">
    <PhoneTopBarVue />
    <SearchBarVue />
    <div class="phone middle">
      <div class="appContainerOne">
        <div class="appLine">
          <div class="appItem">

            <div class="appTotalContainerOne"  @click="modalOpen(1)">
              <div class="appIconContainer">
                <img class="appIcon" :src="this.application1.src" alt="">
              </div>
              <div class="appName" v-if="this.application1.isNickname===false">{{ this.application1.name }}</div>
              <div class="appName" v-if="this.application1.isNickname===true">{{ this.application1.nickname }}</div>
            </div>

            <div class="modal-wrap-1" v-show="modalOneCheck" @click.self="closeModal">
              <div class="modal-tri-1">
                <img src="@/assets/toggleTriangle.svg" alt="" />
              </div>
              <div class="memoContainer">
                <div class="memoName">
                  <div class="memo-middle" v-if="this.application1.isNickname===false">{{this.application1.nickname}}</div>
                  <div class="memo-middle" v-if="this.application1.isNickname===true">{{this.application1.name}}</div>
                  <div class="memo-right">
                    <img src="@/assets/editIcon.svg" alt="" @click="changeName">
                    <img src="@/assets/detailIcon.svg" style="cursor:pointer" alt="" @click="openAppSettingModal(1)">
                  </div>
                </div>
                <div class="memoOption">
                  <div class="memoOptionDetail"><img src="@/assets/select.svg" alt="">선택</div>
                  <div class="memoOptionDetail"><img src="@/assets/homeAdd.svg" alt="">홈 화면에 추가</div>
                  <div class="memoOptionDetail"><img src="@/assets/uninstall.svg" alt="">설치 삭제</div>
                  <div class="memoOptionDetail"><img src="@/assets/widget.svg" alt="">위젯</div>
                </div>
              </div>
            </div>
          </div>

          <div class="appItem">
            
            <div class="appTotalContainerOne"  @click="modalOpen(2)">
              <div class="appIconContainer">
                <img class="appIcon" :src="this.application2.src" alt="">
              </div>
              <div class="appName" v-if="this.application2.isNickname===false">{{ this.application2.name }}</div>
              <div class="appName" v-if="this.application2.isNickname===true">{{ this.application2.nickname }}</div>
            </div>
            
            <div class="modal-wrap-2" v-show="modalTwoCheck" @click.self="closeModal">
              <div class="modal-tri-2">
                <img src="@/assets/toggleTriangle.svg" alt="" />
              </div>
              <div class="memoContainer">
                <div class="memoName">
                  <div class="memo-middle" v-if="this.application2.isNickname===false">{{this.application2.nickname}}</div>
                  <div class="memo-middle" v-if="this.application2.isNickname===true">{{this.application2.name}}</div>

                  <div class="memo-right">
                    <img src="@/assets/editIcon.svg" alt="" @click="changeName">
                    <img src="@/assets/detailIcon.svg" style="cursor:pointer" alt="" @click="openAppSettingModal(2)">
                  </div>
                </div>
                <div class="memoOption">
                  <div class="memoOptionDetail"><img src="@/assets/select.svg" alt="">선택</div>
                  <div class="memoOptionDetail"><img src="@/assets/homeAdd.svg" alt="">홈 화면에 추가</div>
                  <div class="memoOptionDetail"><img src="@/assets/uninstall.svg" alt="">설치 삭제</div>
                  <div class="memoOptionDetail"><img src="@/assets/widget.svg" alt="">위젯</div>
                </div>
              </div>
            </div>
          </div>

          <div class="appItem">
            
            <div class="appTotalContainerOne"  @click="modalOpen(3)">
              <div class="appIconContainer">
                <img class="appIcon" :src="this.application3.src" alt="">
              </div>
              <div class="appName" v-if="this.application3.isNickname===false">{{ this.application3.name }}</div>
              <div class="appName" v-if="this.application3.isNickname===true">{{ this.application3.nickname }}</div>
            </div>
            
            <div class="modal-wrap-3" v-show="modalThreeCheck" @click.self="closeModal">
              <div class="modal-tri-3">
                <img src="@/assets/toggleTriangle.svg" alt="" />
              </div>
              <div class="memoContainer">
                <div class="memoName">
                  <div class="memo-middle" v-if="this.application3.isNickname===false">{{this.application3.nickname}}</div>
                  <div class="memo-middle" v-if="this.application3.isNickname===true">{{this.application3.name}}</div>

                  <div class="memo-right">
                    <img src="@/assets/editIcon.svg" alt="" @click="changeName">
                    <img src="@/assets/detailIcon.svg" style="cursor:pointer" alt="" @click="openAppSettingModal(3)">
                  </div>
                </div>
                <div class="memoOption">
                  <div class="memoOptionDetail"><img src="@/assets/select.svg" alt="">선택</div>
                  <div class="memoOptionDetail"><img src="@/assets/homeAdd.svg" alt="">홈 화면에 추가</div>
                  <div class="memoOptionDetail"><img src="@/assets/uninstall.svg" alt="">설치 삭제</div>
                  <div class="memoOptionDetail"><img src="@/assets/widget.svg" alt="">위젯</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PhoneBottomBarVue />
    <div class="app-setting-modal" v-show="appSettingModal1">
      <AppSettingVue :app="this.application1" @closeAppModal="closeAppSettingModal" @nicknameChanged="nicknameChanged" @modeChanged="modeChanged" />
    </div>
    <div class="app-setting-modal" v-show="appSettingModal2">
      <AppSettingVue :app="this.application2" @closeAppModal="closeAppSettingModal" @nicknameChanged="nicknameChanged" @modeChanged="modeChanged" />
    </div>
    <div class="app-setting-modal" v-show="appSettingModal3">
      <AppSettingVue :app="this.application3" @closeAppModal="closeAppSettingModal" @nicknameChanged="nicknameChanged" @modeChanged="modeChanged" />
    </div>
  </div>
</template>

<script>
import PhoneTopBarVue from "@/components/PhoneTopBarVue.vue";
import SearchBarVue from '@/components/SearchBarVue';
import PhoneBottomBarVue from '@/components/PhoneBottomBarVue';
import AppSettingVue from "./AppSettingVue.vue";

export default {
  data() {
    return {
      now: 0,
      modalOneCheck: false,
      modalTwoCheck: false,
      modalThreeCheck: false,
      activeModal: 0,
      appSettingModal1: false,
      appSettingModal2: false,
      appSettingModal3: false,
      app:{},
    }
  },


  components: {
    PhoneTopBarVue,
    PhoneBottomBarVue,
    SearchBarVue,
    AppSettingVue,
  },

  created() {
    this.application1 = {idx: 1, name: "이마트에브리데이", nickname: "이마트에브리데이", src: require("@/assets/img/icon/이마트에브리데이.png"), isNickname: false};
    this.application2 = {idx: 2, name: "이마트", nickname: "이마트", src: require("@/assets/img/icon/이마트.png"), isNickname: false};
    this.application3 = {idx: 3, name: "이마트몰", nickname: "이마트몰", src: require("@/assets/img/icon/이마트몰.png"), isNickname: false};
  },

  methods: {
    setNickname(idx, value) {
      console.log(value);
      console.log(idx);
    },
    modalOpen: function(value) {
      if (this.modalOneCheck || this.modalTwoCheck || this.modalThreeCheck) {
        this.closeModal();
        return;
      }

      if (value === 1) {
        this.modalOneCheck = !this.modalOneCheck;
        this.activeModal = 1;
      } else if (value === 2) {
        this.modalTwoCheck = !this.modalTwoCheck;
        this.activeModal = 2;
      } else {
        this.modalThreeCheck = !this.modalThreeCheck;
        this.activeModal = 3;
      }
    },
    closeModal : function() {
      this.modalOneCheck = false;
      this.modalTwoCheck = false;
      this.modalThreeCheck = false;
    },
    closeAppSettingModal: function() {
      this.appSettingModal1 = false; 
      this.appSettingModal2 = false; 
      this.appSettingModal3 = false; 
      this.modalOneCheck = false;
      this.modalTwoCheck = false;
      this.modalThreeCheck = false;
    },
    openAppSettingModal: function(value) {

      if (value === 1) {
        this.appSettingModal1 = true;
      } else if (value === 2) {
        this.appSettingModal2 = true;
      } else {
        this.appSettingModal3 = true;
      }
    },
    nicknameChanged: function(value, nickname) {
      if (value === 1) {
        this.application1.nickname = nickname;
      } else if (value === 2) {
        this.application2.nickname = nickname;
      } else {
        this.application3.nickname = nickname;
      }
    },
    modeChanged: function(value, isNickname) {
      if (value === 1) {
        this.application1.isNickname = isNickname;
      } else if (value === 2) {
        this.application2.isNickname = isNickname;

      } else {
        this.application3.isNickname = isNickname;
      }
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.phone-background {
  background: url('@/assets/background/phone-background.png');
}

.middle {
  height: 600px;
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

/* dimmed */
.modal-wrap-1 {
  position: absolute;
  left: calc(50% - 180px);
  top: calc(300px + 22px);
  width: 360px;
  height: 723px;
}
.modal-wrap-2 {
  position: absolute;
  left: calc(50% - 180px);
  top: calc(300px + 22px);
  width: 360px;
  height: 723px;
}
.modal-wrap-3 {
  position: absolute;
  left: calc(50% - 180px);
  top: calc(300px + 22px);
  width: 360px;
  height: 723px;
}
/* modal or popup */
.modal-container {
  transform: translate(-50%, -50%);
  background: #fff;
}


.memoContainer {
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  border-radius: 20px;
  position:relative;
  top: 108px;
  z-index: 899;
  left: 20px;
}

.memoName {
  display: flex;
  flex-direction: row;
  width:100%;
  height: 3rem;
  justify-content: space-between;
  align-content: center;
  background: #CED1D4;
  border-radius: 20px 20px 0 0;
}

.memo-middle {
  display: flex;
  align-items: center;
  font-weight: 700;
  width: 260px;
  justify-content: center;
  overflow:scroll;
}

.memo-right {
  width: 2.5rem;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
}

.memoOption {
  display: flex;
  flex-direction: row;
  width:100%;
  height: 3rem;
  justify-content: space-around;
  align-content: center;
  background: rgba(206,209,212,0.6);
  border-radius: 0 0 20px 20px;
}

.memoOptionDetail {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: .6rem;
}

.memoOption img {
  opacity: 1.0;
  color: black;
  margin-bottom: .2rem;
}

.editBtn {
  cursor: pointer;
}

.appContainerOne {
  padding: 16px 16px;
}

.app-setting-modal {
  position: absolute;
  left: calc(50% - 180px);
  top: calc(300px);
  width: 360px;
  z-index: 999;
}
/* modal or popup */
.modal-container {
  transform: translate(-50%, -50%);
  background: #fff;
}

.appTotalContainerOne {
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
  width: 80px;
  height: 40px;
}

.modal-tri-1 img {
  position: relative;
  width: 20px;
  top: 119px;
  left: -124px;
}

.modal-tri-2 img {
  position: relative;
  width: 20px;
  top: 119px;
  left: -44px;
}

.modal-tri-3 img {
  position: relative;
  width: 20px;
  top: 119px;
  left: 36px;
}
</style>