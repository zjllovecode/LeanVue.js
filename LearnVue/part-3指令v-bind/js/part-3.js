var app = new Vue({
    el:'#app',
    data:{
        url: "http://www.baidu.com",
        img: 'http://i0.hdslb.com/bfs/album/36c358fba91d27e41821bd86827a38b0691e723d.jpg',
        isActive: true,
        imgSize:"width: 100px ;height:100px",

        activeClass: 'active',
        errorClass: 'text-danger'
    }
});