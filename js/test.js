//特殊js 异步渲染
define(function(require,exports,module){
    module.exports={
        state:false,
        //初始化
        init:function(){
            if(this.state)return;
            this.state=true;
            var txt=$(".title",this).text()
            $(".title",this).text(txt+"添加js效果")
        },
        update:function(){

        }
    }
})
