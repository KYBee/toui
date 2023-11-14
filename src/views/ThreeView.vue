<template>
    <div class="phone-background">
      <PhoneTopBarVue />
      <div class="middle">
        <div class="top-title">
          <div class="top-title-left top-item">
            <font-awesome-icon :icon="['fas', 'angle-left']" />
          </div>
          <div class="top-title-middle top-item">로그인</div>
          <div class="top-title-right top-item">
            <font-awesome-icon :icon="['fas', 'bars']" />
          </div>
        </div>
        <div class="top-option">
          <div class="top-option-left">온라인 회원 로그인</div>
          <div class="top-option-right">간편 로그인</div>
        </div>

        <div class="middle-container">
          <div class="login input-container">
            <font-awesome-icon :icon="['far', 'user']" />
            <input class="input-box"
            :value="userId" 
            @input="updatedUserId"
          />
          </div>
          <div class="password input-container">
            <font-awesome-icon :icon="['fas', 'unlock-keyhole']" />
            <input class="input-box"
            :value="userPassword" 
            @input="updatedUserPassword"
          />
          </div>
        </div>
        <div class="middle-auto-login">
          <div class="auto-login-icon">
            <font-awesome-icon :icon="['far', 'circle-check']" />
          </div>
          <div class="auto-login-title">자동로그인</div>
        </div>
        <div class="login-button">
          로그인
        </div>
        
        <ul class="krtoenOption">
          <li class="krtoenItem" v-for="item in recommendUserIdList" :key="item" @click="selectUserIdItem">{{ item }}</li>
          <li class="krtoenItem" v-for="item in recommendUserPasswordList" :key="item" @click="selectUserPasswordItem">{{ item }}</li>
        </ul>

        <div class="keyboard-option">
          <div class="keyboard-icon">
            <button class="checkButton" @click="clickButton"><img :src="krtoen ? activeButton : inactiveButton" alt=""></button>
          </div>
          <div class="keyboard-icon ">
            <img src="@/assets/keyboard/Toolbar-Microphone.png" alt="">
          </div>
          <div class="keyboard-icon ">
            <img src="@/assets/keyboard/Toolbar-Settings.png" alt="">
          </div>
          <div class="keyboard-icon ">
            <img src="@/assets/keyboard/Toolbar-Emojis.png" alt="">
          </div>
          <div class="keyboard-icon ">
            <img src="@/assets/keyboard/Toolbar-Language.png" alt="">
          </div>
          <div class="keyboard-icon more">
            <font-awesome-icon :icon="['fas', 'ellipsis']" />
          </div>
        </div>


      </div>
      <PhoneBottomBarVueVue />
    </div>
</template>

<script>
import PhoneTopBarVue from '@/components/PhoneTopBarVue';
import PhoneBottomBarVueVue from '@/components/PhoneBottomBarVue.vue';

export default {
  components : {
    PhoneTopBarVue,
    PhoneBottomBarVueVue,
  },
  data() {
    return {
      checkArr:[],
      recommendUserIdList: [],
      recommendUserPasswordList: [],
      userId: "",
      userPassword: "",
      currentUserIdLength: 0,
      currentUserPasswordLength: 0,
      krtoen: false,
      activeButton: require("@/assets/keyboard/Toolbar-Search-active.png"),
      inactiveButton: require("@/assets/keyboard/Toolbar-Search-inactive.png"),
      keyMap : {
        "에이" : ["A", "a"],
        "애이" : ["A", "a"],
        "비" : ["B", "b"],
        "삐" : ["B", "b"],
        "시" : ["C", "c"],
        "씨" : ["C", "c"],
        "디" : ["D", "d"],
        "이" : ["E", "e"],
        "에프" : ["F", "f"],
        "애프" : ["F", "f"],
        "지" : ["G", "g", "Z", "z"],
        "쥐" : ["G", "g"],
        "에이치" : ["H", "h"],
        "애이치" : ["H", "h"],
        "아이" : ["I", "i"],
        "제이" : ["J", "j"],
        "재이" : ["J", "j"],
        "케이" : ["K", "k"],
        "캐이" : ["K", "k"],
        "엘" : ["L", "l"],
        "앨" : ["L", "l"],
        "엠" : ["M", "m"],
        "앰" : ["M", "m"],
        "엔" : ["N", "n"],
        "앤" : ["N", "n"],
        "오" : ["O", "o"],
        "피" : ["P", "p"],
        "큐" : ["Q", "q"],
        "알" : ["R", "r"],
        "에스" : ["S", "s"],
        "애스" : ["S", "s"],
        "에쓰" : ["S", "s"],
        "애쓰" : ["S", "s"],
        "티" : ["T", "t"],
        "유" : ["U", "u"],
        "브이" : ["V", "v"],
        "떠블유" : ["W", "w"],
        "더블유" : ["W", "w"],
        "엑스" : ["X", "x"],
        "액스" : ["X", "x"],
        "엑쓰" : ["X", "x"],
        "액쓰" : ["X", "x"],
        "와이" : ["Y", "y"],
        "제트" : ["Z", "z"],
        "재트" : ["Z", "z"],
      },
    }
  },
  watch: {
    krtoen: function() {
      if (this.krtoen) {
        this.iconButton = require("@/assets/keyboard/Toolbar-Search-active.png");
      } else {
        this.iconButton = require("@/assets/keyboard/Toolbar-Search-inactive.png");
      }
    }
  },
  methods: {
    clickButton: function() {
      this.krtoen = !this.krtoen;
    },
    updatedUserId: function(event) {
      this.recommendUserPasswordList = [];
      this.currentUserPasswordLength = this.userPassword.length;

      const pattern1 = /^[a-zA-Z1-9]+$/;
      const pattern3 = /[!?@#$%^&*():;+-=~{}<>_[|"',./`₩]/g;
      //const pattern2 = /\s/g;
      
      //입력할 때 바로 적용이 안되는 이슈 있음
      this.userId = event.target.value;
      this.tempId = event.target.value.substring(this.currentUserIdLength, this.userId.length);
      
      if (pattern1.test(this.tempId) || pattern3.test(this.tempId)) {
        this.currentUserIdLength = this.userId.length;
      } else if (this.userId.length < this.currentUserIdLength) {
        this.currentUserIdLength = this.userId.length;
      } else if (this.krtoen === true) {
        if (Object.keys(this.keyMap).includes(this.tempId)) {
          this.recommendUserIdList = this.keyMap[this.tempId];
          if (this.recommendUserIdList.length < 5) {
            while (this.recommendUserIdList.length !== 5) {
              this.recommendUserIdList.push("");
            }
          }
        } else {
          this.recommendUserIdList = [];
        }
      } else {
        this.recommendUserIdList = [];
        this.currentUserIdLength = this.userId.length;
      }
    },
    updatedUserPassword: function(event) {
      this.recommendUserIdList = [];
      this.currentUserIdLength = this.userId.length;

      const pattern1 = /^[a-zA-Z1-9]+$/;
      const pattern3 = /[!?@#$%^&*():;+-=~{}<>_[|"',./`₩]/g;
      //const pattern2 = /\s/g;
      
      //입력할 때 바로 적용이 안되는 이슈 있음
      this.userPassword = event.target.value;
      this.tempPassword = event.target.value.substring(this.currentUserPasswordLength, this.userPassword.length);
      
      if (pattern1.test(this.tempPassword) || pattern3.test(this.tempPassword)) {
        this.currentUserPasswordLength = this.userPassword.length;
      } else if (this.userPassword.length < this.currentUserPasswordLength) {
        this.currentUserPasswordLength = this.userPassword.length;
      } else if (this.krtoen === true) {
        if (Object.keys(this.keyMap).includes(this.tempPassword)) {
          this.recommendUserPasswordList = this.keyMap[this.tempPassword];
          if (this.recommendUserPasswordList.length < 5) {
            while (this.recommendUserPasswordList.length !== 5) {
              this.recommendUserPasswordList.push("");
            }
          }
        } else {
          this.recommendUserPasswordList = [];
        }
      } else {
        this.recommendUserPasswordList = [];
        this.currentUserPasswordLength = this.userPassword.length;
      }
    },
    selectUserIdItem: function(event) {
      const selectedWord = event.target.innerText;
      this.userId = this.userId.slice(0, this.currentUserIdLength);
      this.userId += selectedWord;
      this.recommendUserIdList = [];
      this.currentUserIdLength = this.userId.length;
    },
    selectUserPasswordItem: function(event) {
      const selectedWord = event.target.innerText;
      this.userPassword = this.userPassword.slice(0, this.currentUserPasswordLength);
      this.userPassword += selectedWord;
      this.recommendUserPasswordList = [];
      this.currentUserPasswordLength = this.userPassword.length;
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.top-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-item {
  padding: .8rem;
}

.top-title-middle {
  font-weight: 700;
}

.top-option {
  display: flex;
  justify-content: center;
  align-items:center;
}

.top-option-left {
  width: 50%;
  padding: .7rem 0 .5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: 600;
  border-bottom: 2px solid black;
}

.top-option-right {
  width: 50%;
  padding: .7rem 0 .5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  font-weight: 500;
  border-bottom: 1px solid gray;
}

.middle {
  background: white;

  height: 650px;
  padding: 10px 0;
}

.middle-container {
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}

.middle-auto-login {
  display: flex;
  width: 90%;
  margin: 0 auto;
}

.auto-login-icon {
  color: gray;
  padding: 0 0.5rem;
}

.login-button {
  width: 90%;
  margin: 1rem auto;
  border-radius: 10px;
  border: 0px;
  background: #E6E6E6;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
}

.input-container {
  width: 90%;
  margin: 0 auto;
  background: #FFFFFF;
  border-radius: 25px;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid #F2EA28;
  margin: .3rem 0;
}

.input-box {
  width: 80%;
  height: 2.5rem;
  border: 0px;

}

.keyboard-option {
  background: #F6F6F6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
}

.keyboard-icon {
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.checkButton {
  border: 0px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}

.phone-background {
  width: 360px;
  margin: 0 auto;
  background: gray;
  border-left: .1px solid black;
  border-right: .1px solid black;
}

.krtoenOption { 
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  background: #FFFFFF;
}

.krtoenItem {
  list-style: none;
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #F6F6F6;
}
</style>