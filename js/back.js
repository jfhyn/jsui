define(function(require,exports,module){

    module.exports={
        state:false,
        //初始化
        init:function(){
            if(this.state)return;
            this.state=true;
            this.use()
        }
    }
})