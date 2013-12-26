define(function(require,exports,module){
require("com/jquery-1.7.1.min")
//别名
seajs.config({
    alias: {

    }
})

jQuery.jsui=function(){
        $("[jsui]").each(function(){
            var the=this
            seajs.use($(this).attr("jsui"),function(dom){
				if(!the.init&&dom.init){
					$.extend(the,dom)
					the.init()
				}
            })
        })
}
$("body").ajaxComplete(function(){
    jQuery.jsui()
})
jQuery.jsui()

})





