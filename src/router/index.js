// router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import PresentBoxPage from '@/views/PresentBoxPage.vue';
import PresentPage from '@/views/PresentPage.vue';

Vue.use(VueRouter);

// 라우트 정보
const route = [
  { path: '/', component: MainPage },
  { path: '/present-box', component: PresentBoxPage },
  { path: '/present', component: PresentPage },
];

// Vue 라우터 인스턴스 생성
const router = new VueRouter({ mode: 'history', base: '/birthday/', routes: route });

export default router;
