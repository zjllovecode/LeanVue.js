var app = new Vue({
    el: '#app',
    data:{
        math: 90,
        physics: 80,
        english: 78,
    },
    computed: {
        sum: function () {
            // 为了防止把数字当成字符串处理，使用parseFloat(),解析成float最保险，用了这个就可以不用v-model.number 了
            return parseFloat(this.math) + parseFloat(this.physics) + parseFloat(this.english);
        },
        average: function () {
            return Math.round(this.sum/3);
        }
    }
   /* 我们可以使用 methods 来替代 computed，效果上两个都是一样的，
   但是 computed 是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值。
   而使用 methods ，在重新渲染的时候，函数总会重新调用执行。*/
});