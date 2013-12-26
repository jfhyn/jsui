define(function(require,exports,module){
    require("com/ejs");
    module.exports={
        state:false,
        //初始化
        init:function(){
            if(this.state)return;
            this.state=true;
            this.use()
        },
        use:function(){
            var the=this
            var url=$(this).attr("url")
            if(url){
                $.ajax({ url: url,dataType:"json", success: function(data){
                    the.render(data)
                }});
            }
            var getdata=$(this).attr("getdata")
            if(getdata){
                var data=$("[data="+getdata+"]").html()
                this.render($.parseJSON(data))
            }
        },
        render:function(data){
            if(!data){return;}
            var html=ejs.render($(this).text(),data)
            if(this.no){
                $(this).html(html)
            }else{
                this.no=true
                $(this).after(html)
            }

        }
    }



})
