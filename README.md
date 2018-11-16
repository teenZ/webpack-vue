# webpack-vue
尝试着写个vue的脚手架吧

refs:   
1. https://www.cnblogs.com/tugenhua0707/p/9709579.html  
2. 《vue.js实战》

vue-router
------------
### 1. 两种模式
页面只有一个index.html页面。vue-router为实现单页面前端路由提供了两种模式：hash模式和history模式
* hash： 
hash是URL的锚点(#), 代表网页中的一个位置，如果只改变#后的部分，浏览器不会重新加载网页，而是会滚动到相应的位置。并且每次改变#后的部分，都会在浏览器的访问历史中增加一条记录，当我们使用后退按钮的时候，就可以返回到上一个位置。因此hash模式通过锚点值的改变，根据不同的值，渲染指定DOM位置的不同数据。
地址类似于：
> http://localhost:8080/#/
* history: 只需要在配置路由规则时，加入 'mode': 'history'即可，它是利用html5中的 history.pushState的API来完成的URL跳转，无需重新加载页面的。但是这种配置需要后台开发支持。

### 2. 两个标签
* router-link  
```<router-link>```会被渲染为一个```<a>```标签；有几个属性：   
   * to: 指定需要跳转的路径  
   * tag: 指定渲染成什么标签  
     >```<router-link to="" tag="li"></router-link> ```  
   * replace: 使用replace不会留下History记录，所以导航后不能用后退键返回上一个页面
     >```<router-link to="" replace></router-link>```  
   * active-class: 当路由匹配成功时，会自动给当前元素设置一个class(" router-link-active ")，可以用该属性来修改默认的样式，如可以设置高亮 
      > ```css
      > .router-link-active{
      >     background: #ccffee;
      > }

* router-view  
```<router-link>```是点击的部分，```<router-view>```是定义显示的部分，当我们点击之后，路由匹配组件的内容后会在```<router-view>```显示出来，```<router-link>```还需要一个属性 to, 它的含义就是到哪里去的意思

### 3. 两种跳转方式
* vue-router  
* router实例方法   
此适用于需要在JS中写跳转页面   
  >```js
  >this.$router.push('./home'); //类似于 window.location.href
  >this.$router.push({
  >    name: '', // 改成path的话参数不生效！
  >    params: {} // 可在页面console.log(this.$route.params.attr)获得
  >})
  >this.$router.replace('./home'); // 类似于router-link中的 replace 功能，不会向history添加新纪录 
  >this.$router.go(-1); // 类似于window.history.go()

### 4. 路由配置
* route.js
  >```js
  >const routes = [
  >   { path: './header', componnet: header }
  >   { path: './footer', componnet: footer } 
  >]
  >
  >const router = new VueRouter({
  >    routes: routes
  >})
  >  
  >new Vue({
  >  el: '#app',
  >  router: router, //router实例注入vue根实例
  >  render: h => h()
  >});

* 懒加载：当访问页面的时候才会去加载相关资源，提高页面的访问速度
  >```js
  >const routes = [
  >     { 
  >         path: './header', 
  >         componnet: resolve => require(['./views/header'], resolve) // 使用懒加载
  >     }  
  >]

* 参数配置   
  >```js
  >route.js
  >const routes = [
  >     { 
  >         path: './header/:id', 
  >         name: 'header',
  >         componnet: resolve => require(['./views/header'], resolve) // 使用懒加载
  >     }  
  >]
  >```
  >```html
  >//app.vue
  ><template> 
  ><router-link to="header/1">
  ></template>
  >
  ><script>
  >    console.log(this.$route.params.id) //1
  ></script>

### 5. 命名视图

### 6. 嵌套路由（cf: 兄弟路由）
>```js
>//route.js
>const routes = [
>    {
>        path: '/leo',
>        name: 'leo',
>        component: leo,
>        // 子路由
>        children: [
>            {
>                path: 'luoyu',
>                component: resolve => require(['./views/luoyu'], resolve)
>            },
>            {
>                path: 'runyu',
>                component: resolve => require(['./views/runyu'], resolve)
>            }
>        ]
>    }
>]
>```
>```html
><!--app.vue-->
><template>
>    <div id="app">
>        <header>
>            <router-link to="/leo">Leo</router-link>
>            <router-link to="/young">Yang</router-link>
>            <router-link to="/leo/luoyu">罗玉</router-link>
>            <router-link to="/leo/runyu">天帝</router-link>
>        </header>
>        <router-view></router-view>
>    </div>
></template>
>```
>```html
><!--leo.vue-->
><!--父组件，一定要有个router-view，父子路由视图一起显示，不然没必要用嵌套路由呀-->
><template>
>   <div>
>        <h1>哦还是被你发现了</h1>
>        <p>{{msg}}</p>
>        <router-view></router-view>
>    </div>
></template>

### 7. 其他用法
* SPA修改网页标题  
vue-router 提供了两个钩子函数, 适合做```全局路由守卫```   
  * beforeEach
  >```js
  > // route.js
  >const routeConfig = [
  >   {
  >       path: '/home',
  >       meta: {
  >           title: '首页'
  >       }
  >   } 
  >];
  >
  >const router = new VueRouter(routeConfig);
  >router.beforeEach((to, from, next) => {
  >    window.document.title = to.meta.title;
  >    next();
  >}) 
  >/** 导航钩子 3 个参数
  >* to: 即将要进入的目标的路由对象
  >* from: 当前导航即将要离开的路由对象
  >* next：调用改方法后，才能进入下一个钩子，可指定 next('./home') 
  >*/  
  * afterEach

bug encountered
-----------
1. ``` Module not found: Error: Can't resolve './assets/images/yy.jpg' in 'D:\something-new\webpack-vue\src\views'```  
需要注意引用图片是的路径，最好用绝对路径写？