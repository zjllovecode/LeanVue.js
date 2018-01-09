// 能重复点赞的自定义组件
Vue.component('like', {
    template: '<button v-on:click="toggle_like">赞:{{like_count}}</button>',
    // 因为每一个组件都要用，所以不能是对象，要写成方法，这样每次都是新的
    // 不写成 function 还会报错.......
    data: function () {
        return { like_count:10 }
    },
    methods: {
        toggle_like: function () {
            this.like_count++;
        }
    }
})
var app1 = new Vue({
    el:'#seg1'
});


// 只能点赞一次的自定义组件

// 提取出来的方式
/*var like_component = {
    template: '<button v-on:click="toggle_like">赞:{{like_count}}</button>',
        data: function () {
            return {like_count: 1,liked:true}
        },
        methods: {
            toggle_like: function () {
                if (this.liked)
                    this.like_count++;
                else
                    this.like_count--;

                this.liked = !this.liked;
            }
        }
    };*/


var app2 = new Vue({
    el: '#seg2',
    components: {
        /*like_only: like_component,*/
        like_only: {
            template: '<button v-on:click="toggle_like">赞:{{like_count}}</button>',
            data: function () {
                return {like_count: 1,liked:true}
            },
            methods: {
                toggle_like: function () {
                    if (this.liked)
                        this.like_count++;
                    else
                        this.like_count--;

                    this.liked = !this.liked;
                }
            },
        },
    }
});


var app3 = new Vue({
    el: '#seg3',
    components: {
        like_other_way: {
            template: '#like-other-way',
            data: function () {
                return {like_count: 1,liked:true}
            },
            methods: {
                toggle_like: function () {
                    if (this.liked)
                        this.like_count++;
                    else
                        this.like_count--;

                    this.liked = !this.liked;
                }
            },
        },
    }
});