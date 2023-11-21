<template>
  <div class="selectBox">
    <div class="selectItem">정렬</div>
    <div class="selectItem">설정</div>
    <div class="selectItem">페이지 정리</div>
    <div class="selectItem" @click="appSizing">아이콘 키우기</div>
  </div>
</template>

<script>
export default {
  methods: {
    appSizing: function() {
      this.$emit("appSizing");
    }
  }
}
</script>

<style>

.selectBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 160px;
  border-radius: 25px;
  background: #FFF;
  top: 30px;
  left: 190px;
  position: relative;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.selectItem {
  width: 70%;
  margin: 0 auto;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}
</style>