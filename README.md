# webpack-vue
尝试着写个vue的脚手架吧

refs: https://www.cnblogs.com/tugenhua0707/p/9709579.html

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
* router-view  
```<router-link>```是点击的部分，```<router-view>```是定义显示的部分，当我们点击之后，路由匹配组件的内容后会在```<router-view>```显示出来，```<router-link>```还需要一个属性 to, 它的含义就是到哪里去的意思

### 3. 路由配置
```
const routes = [
   { path: './header', componnet: header }
   { path: './footer', componnet: footer } 
]

const router = new VueRouter({
    routes: routes
})

new Vue({
  el: '#app',
  router: router, //router实例注入vue根实例
  render: h => h()
});
```

### bug encountered
1. Module not found: Error: Can't resolve './assets/images/yy.jpg' in 'D:\something-new\webpack-vue\src\views'  
需要注意引用图片是的路径，最好用绝对路径写？