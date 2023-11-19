<template>
  <div class="phone-container" >
      <PhoneTopBarVue class="app-detail-bar"/>
      <div class="app-detail-middle">
          <div class="app-info">
              <div class="app-info-top">
                  <div @click="closeAppSettingModal" style="cursor: pointer"><font-awesome-icon :icon="['fas', 'chevron-left']" /></div>
                  <div class="app-info-title">애플리케이션 정보</div>
              </div>
              <div class="app-info-bottom">
                  <div class="app-icon">
                      <img :src="this.application.src" alt="">
                  </div>
                  <div class="app-name-container">
                      <div class="app-name">{{this.application.name}}</div>
                      <div class="small-title">설치됨</div>
                  </div>
              </div>
          </div>
          
          <div class="app-option">
              <div class="app-edit-nickname">
                  <div class="small-title">
                      편집
                  </div>
                  <div class="app-option-container">
                      <div class="app-option-item " style="cursor:pointer" @click="modalOpen">
                          <div class="app-option-title">
                              별칭
                          </div>
                          <div class="app-option-subtitle" >
                              {{this.nickname}}
                          </div>
                      </div>
                      <div class="app-option-item-toggle">
                          <div class="app-mix">
                              <div class="app-option-title">
                                  별칭모드 사용
                              </div>
                              <div class="app-option-subtitle-v2">
                                  화면에 별칭이 표시됩니다.
                              </div>
                          </div>
                          <div class="app-option-toggle">
                              <img v-if="this.isNickname === true" :src="this.toggleOn" alt="" @click="changeMode">
                              <img v-if="this.isNickname === false" :src="this.toggleOff" alt="" @click="changeMode">
                          </div>
                      </div>
                  </div>
              </div>
              <div class="app-privacy">
                  <div class="small-title">
                      개인정보 보호
                  </div>
                  <div class="app-option-container">
                      <div class="app-option-item">
                          <div class="app-option-title">
                              알림
                          </div>
                          <div class="app-option-subtitle">
                              허용됨
                          </div>
                      </div>
                      <div class="app-option-item">
                          <div class="app-option-title">
                              권한
                          </div>
                          <div class="app-option-subtitle">
                              알림
                          </div>
                      </div>
                      <div class="app-option-item">
                          <div class="app-option-title">
                              사용시간
                          </div>
                      </div>
                      <div class="app-option-item-toggle">
                          <div class="app-option-title">
                              사용하지 않는 앱 권한 삭제
                          </div>
                          <div class="app-option-toggle">
                              <img src="@/assets/toggle/toggle-on.svg" alt="">
                          </div>
                      </div>
                  </div>

              </div>
              <div class="app-basic">
                  <div class="small-title">
                      기본
                  </div>
                  <div class="app-option-container">
                      <div class="app-option-item">
                          <div class="app-option-title">
                              기본으로 설정
                          </div>
                          <div class="app-option-subtitle">
                              이 앱으로 설정
                          </div>
                      </div>          
                  </div>

              </div>
              <div class="app-use">
                  <div class="small-title">
                      사용량
                  </div>
                  <div class="app-option-container">
                      <div class="app-option-item">
                          <div class="app-option-title">
                              모바일 데이터
                          </div>
                          <div class="app-option-subtitle-v2">
                              9월 1일 이후로 547KB 사용됨
                          </div>
                      </div>  
                      <div class="app-option-item">
                          <div class="app-option-title">
                              배터리
                          </div>
                          <div class="app-option-subtitle-v2">
                              충전한 이후로 10% 사용됨
                          </div>
                      </div>  
                      <div class="app-option-item">
                          <div class="app-option-title">
                              저장공간
                          </div>
                          <div class="app-option-subtitle-v2">
                              내장 저장공간에서 18.77MB 사용
                          </div>
                      </div>   
                  </div>
              </div>
          </div>
      </div>
      <div class="phone bottombar" style="color:black">
        <div><font-awesome-icon :icon="['fas', 'bars']" rotation=90 /></div>
        <div><font-awesome-icon :icon="['far', 'square']" @click="closeAppSettingModal" style="cursor: pointer"/></div>
        <div><font-awesome-icon :icon="['fas', 'chevron-left']" @click="closeAppSettingModal" style="cursor: pointer" /></div>
      </div>

      <div class="nickname-modal-wrap" v-show="nicknameModalCheck" @click.self="closeModal">
          <div class="nicknameModalContainer" >
              <div class="nickname-container">
                  <div class="nickname-modal-content">
                      <div class="nickname-modal-title">
                          애플리케이션 별칭 변경
                      </div>
                      <div class="nickname-modal-subtitle">
                          사용자의 화면에서 이 별칭으로 표시됩니다.
                      </div>
                  </div>
                  <input type="text" class="nickname-modal-input" maxlength="15" v-bind:value="this.nicknameInput" v-on:input="updateInput">
                  <div class="nickname-modal-button">
                      <div class="nickname-modal-cancel" style="cursor:pointer" @click="closeModal">취소</div>
                      <div class="nickname-modal-success" style="cursor:pointer" @click="successModal">완료</div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import PhoneTopBarVue from '@/components/PhoneTopBarVueBlack.vue';

export default {
  name: "AppSettingVue",
  props: {
    app: {
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
  components: {
      PhoneTopBarVue,
  },
  data() {
      return {
          application: {
            name: "",
            nickname:"",
            src: "",
            isNickname: false,
          },
          toggleOn: require("@/assets/toggle/toggle-on.svg"),
          toggleOff: require("@/assets/toggle/toggle-off.svg"),
          nicknameModalCheck: false,
          nicknameInput:"",
          nickname: "",
          isNickname: false,
      }
  },
  

  created() {
  },

  mounted() {
    this.application = this.app;
    this.nicknameInput = this.application.nickname;
    this.nickname = this.application.nickname;
    this.isNickname = this.application.isNickname;
  },

  methods: {
      changeMode: function() {
          this.isNickname = !this.isNickname;
      },
      modalOpen: function() {
          this.nicknameModalCheck = !this.nicknameModalCheck;
      },
      closeModal : function() {
          this.nicknameModalCheck = false;
      },
      successModal : function() {
          if (this.nicknameInput !== this.nickname) {
              this.nickname = this.nicknameInput;
          }
          this.closeModal();
      },
      updateInput: function(e) {
          this.nicknameInput = e.target.value;
      }, 
      closeAppSettingModal: function() {
        this.$emit("closeAppModal");
      }
  },
  watch: {
    nickname: function() {
      this.$emit("nicknameChanged", this.application.idx, this.nickname);

    },
    isNickname: function() {
      this.$emit("modeChanged", this.application.idx, this.isNickname);
    }
  }
}
</script>

<style scoped>
* {
box-sizing: border-box;
}
.phone-container {
  margin:0 auto;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 360px;
  background: #F6F6F6;
}

.app-detail-bar {
  width: 100%;
}

.app-detail-middle {
  height: 700px;
  width: 100%;
  overflow: scroll;
}

.app-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.app-info-top {
  margin-top: 12px;
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
}

.app-info-title {
  margin: 16px;
  font-size: 20px;
  font-weight: 700;
}

.app-info-bottom {
  width: 90%;
  display: flex;

}

.app-icon > img {
  width: 60px;
  border-radius: 25px;
}

.app-name-container {
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.app-name {
  font-weight: 600;
  font-size:18px;
}

.small-title {
  font-weight: 300;
  text-align: left;
  font-size: 13px;
}

.app-option-container {
  width: 100%;
  border-radius: 20px;
  background: white;
}

.app-option .small-title {
  margin: 10px 20px;
} 
.app-option-item {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-top: 1px solid #F6F6F6;
  border-bottom: 1px solid #F6F6F6;
  height: 60px;
  padding: 5px;
}

.app-mix {
  text-align: left;
}

.app-option-item-toggle {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #F6F6F6;
  border-bottom: 1px solid #F6F6F6;
  height: 60px;
  padding: 5px;
}

.app-option-title {
  font-weight: 600;
}

.app-option-subtitle {
  font-weight: 400;
  font-size: 13px;
  color: #1896CC;
}

.app-option-subtitle-v2 {
  font-weight: 500;
  font-size: 13px;
  color: black;
}

.nickname-modal-wrap {
position: absolute;
left: calc(50% - 180px);
top: 0;
width: 360px;
height: 723px;
background: rgba(0,0,0,0.2);
}
/* modal or popup */
.nickname-modal-container {
transform: translate(-50%, -50%);
background: #fff;
}

.nickname-container {
  background: white;
  position: relative;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  top: 270px;
  width: 95%;
  margin: 0 auto;
  height: 180px;
  justify-content: space-evenly;
}

.nickname-modal-title {
  font-weight: 600;
  font-size: 16px;
  text-align: left;
  width: 90%;
  margin:5px auto;
  display: flex;    
  align-items:flex-end;
}

.nickname-modal-subtitle {
  font-weight: 500;
  font-size: 14px;
  text-align: left;
  width: 90%;
  margin:0 auto;
}

.nickname-modal-input {
  border: 0px;
  font-weight: 600;
  font-size: 16px;
  border-bottom: 2px solid black;
  width: 90%;
  margin:0 auto;
}

.nickname-modal-button {
  display:flex;
  justify-content:center;
  align-items:center;
}

.nickname-modal-cancel {
  font-weight: 700;
  font-size: 20px;
  width: 45%;
}

.nickname-modal-success {
  color: #0282FD;
  font-weight: 700;
  font-size: 20px;
  width: 45%;
}

.bottombar {
  width: 100%;
  height: 40px;
  display: flex;
  color: white;
  justify-content: space-evenly;
  align-items: center;
  background: #F6F6F6;
}

</style>