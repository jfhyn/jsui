//新标签
define(function(require,exports,module){
    //动态解析
    module.exports={
        //初始化
        init:function(){
            var txt=$(".title",this).text()
            $(".title",this).click(function(){
                alert(txt+"添加js效果")
            })
        }
    }
})
