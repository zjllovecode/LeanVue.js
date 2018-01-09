var Event = new Vue();

// 主人组件
Vue.component('master', {
    template:`
    <div>
        主人说：<input v-on:keyup="on_change" v-model="master_say"/>
    </div>
    `,
    methods: {
        on_change: function () {
            Event.$emit('master-said-something', this.master_say)
        }
    },
   data: function () {
       return {
           master_say: '',
       }
   }
});

// 鹦鹉组件
Vue.component('yingwu', {
    template: `<div>主人说了： {{master_said}}</div>`,
    data: function() {
        return {
            master_said: '',
        }
    },
    mounted: function () {
        var me = this;
        // 在下面Event中this 就会指代Event,所以先把它定义出来
        Event.$on('master-said-something', function (data) {
            me.master_said = data;
        })
    }
});

new Vue({
    el:'#app',
})