<template>
  <div class="selectBox">
    <div class="selectItem">정렬</div>
    <div class="selectItem">설정</div>
    <div class="selectItem">앱 크기 키우기</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.selectBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 160px;
  border-radius: 20px;
  background: #EFEFEF;
  opacity: 0.9;
  top: 30px;
  left: 190px;
  position: relative;
}

.selectItem {
  width: 80%;
  margin: 0 auto;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>