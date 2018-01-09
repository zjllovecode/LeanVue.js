var app = new Vue({
    el:'ul',
    data:{
        foodList:[
            {
                name:'葱',
                price:4.5,
                discount: .8,
            },
            {
                name:'姜',
                price:10,
                discount: .5,
            },
            {
                name:'蒜',
                price:7.5,
            }
        ]
    }
});