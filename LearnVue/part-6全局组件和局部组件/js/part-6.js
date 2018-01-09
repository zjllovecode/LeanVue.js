// 全局component
Vue.component('zjl', {
    template: '<button @click="onClick">I Miss You</button>',
    methods:{
        onClick: function(){
            alert('LaLa-Land');
        }
    }
});
// 局部component,而且被提取出来了，直接写在里面也是可以的
var weather_component = {
    template: '<button v-on:click="onClick">今天是什么天气呢</button>',
    methods:{
        onClick:function () {
            alert("大晴天啦！");
        }
    }
};

// 指定生存空间
new Vue({
    el:'#seg1'
});

new Vue({
    el:'#seg2',
    components: {
        weather: weather_component
    }
});