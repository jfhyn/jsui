//特殊js 异步渲染
define(function(require,exports,module){
    module.exports={
        state:false,
        //初始化
        init:function(){
            if(this.state)return;
            this.state=true;
            var url=$(this).attr("src")
            var the=this
            $.get(url,function(html){
                $(the).html(html)
            })
        },
        update:function(){

        }
    }

})
