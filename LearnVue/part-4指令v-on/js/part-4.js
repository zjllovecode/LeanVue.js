var app1 = new Vue({
    el:"#bt1",
    methods: {
        onClick: function () {
            console.log("LaLa-Land");
        },
    }
});

var app2 = new Vue({
    el:"#bt2",
    methods: {
        onEnter: function () {
            console.log("hello");
        },
        onOut: function () {
            console.log("goodBay");
        }
    }
});