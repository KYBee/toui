<template>
    <div class="phoneContainer">
        <PhoneVue />
    </div>
</template>

<script>
import PhoneVue from '@/components/PhoneVue.vue';

export default {
  data() {

  },

  components: {
    PhoneVue,
  }
}
</script>

<style scoped>
.phoneContainer {
    width: 360px;
    margin: 0 auto;
}
</style>