Vue.component('alert', {
    template: '<button @click="on_click()">点我</button>',
    props: ['msg'],
    methods: {
        on_click: function () {
            alert(this.msg);
        }
    }
    }

)

new Vue({
    el:"#seg1"
})