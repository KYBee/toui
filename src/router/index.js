import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    // 홈 화면
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    // 닉네임 설정 기능
    path: '/one',
    name: 'one',
    component: () => import('@/views/OneView.vue')
  },
  {
    // 키보드 음차모드
    path: '/three',
    name: 'three',
    component: () => import('@/views/ThreeView.vue')
  },
  {
    // 자주쓰는 아이콘 키우기
    path: '/four',
    name: 'four',
    component: () => import('@/views/FourView.vue')
  },
  {
    // 앱 정리 기능
    path: '/five',
    name: 'five',
    component: () => import('@/views/FiveView.vue')
  },
  {
    // 앱 정리 기능
    path: '/setting/:app',
    name: 'setting',
    component: () => import('@/components/AppSettingVue.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;