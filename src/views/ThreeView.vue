<template>
    <div>
      <div class="login">
        <h2>로그인</h2>
        <input 
        :value="userId" 
        @input="updatedUserId"
      />
      </div>
      <div class="password">
        <h2>비밀번호</h2>
        <input 
        v-model;:value="userPassword" 
        @input="updatedUserPassword"
      />
      </div>
      <div class="checkButton">
        <input type="checkbox" v-model="krtoen" />음차모드
      </div>
      <ul class="krtoenOption">
        <li class="krtoenItem" v-for="item in recommendList" :key="item" @click="selectItem">{{ item }}</li>
      </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      checkArr:[],
      recommendList: [],
      userId: "",
      userPassword: "",
      currentUserIdLength: 0,
      currentUserPasswordLength: 0,
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
    // userId: function (val) {
    //   this.userId = val;
    // },
    // userPassword: function (val) {
    //   this.userPassword = val;
    // },
    krtoen: function() {
      this.krtoen = !this.krtoen;
    }
  },
  methods: {
    updatedUserId: function(event) {
      const pattern1 = /^[a-zA-Z1-9]+$/;
      const pattern3 = /[!?@#$%^&*():;+-=~{}<>_[|"',./`₩]/g;
      //const pattern2 = /\s/g;
      
      //입력할 때 바로 적용이 안되는 이슈 있음
      this.userId = event.target.value;
      this.tempId = event.target.value.substring(this.currentUserIdLength, this.userId.length);
      
      if (pattern1.test(this.tempId) || pattern3.test(this.tempId)) {
        this.currentUserIdLength = this.userId.length;
        console.log("hello")
      } else if (this.userId.length < this.currentUserIdLength) {
        console.log("hello");
        this.currentUserIdLength = this.userId.length;
      } else if (this.krtoen === true) {
        console.log(this.userId);
        if (Object.keys(this.keyMap).includes(this.tempId)) {
          console.log(this.keyMap[this.userId]);
          this.recommendList = this.idRecommend = this.keyMap[this.tempId];
        } else {
          this.recommendList = [];
        }
      } else {
        this.recommendList = [];
        this.currentUserIdLength = this.userId.length;
      }
    },
    updatedUserPassword: function() {
      console.log("bye")
      return 2
    },
    selectItem: function(event) {
      const selectedWord = event.target.innerText;
      console.log(selectedWord);
      console.log(this.currentUserIdLength);
      this.userId = this.userId.slice(0, this.currentUserIdLength);
      this.userId += selectedWord;
      this.recommendList = [];
      this.currentUserIdLength = this.userId.length;
    }
  }
}
</script>

<style scoped>
.krtoenOption { 
  width: 300px;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding: 0;
}

.krtoenItem {
  list-style: none;
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;
}
</style>