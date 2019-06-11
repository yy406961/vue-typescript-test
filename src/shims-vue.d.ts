declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}
 
declare module 'qs' {
    const qs: any;
    export default qs;
}

// 声明全局方法
declare module "vue/types/vue" {
    import VueRouter, { Route } from "vue-router";
    interface Vue {
      $router: VueRouter; // 这表示this下有这个东西
      $route: Route;
      $https: any;
      $urls: any;
      $Message: any;
      $Modal: any;
    }
  }
