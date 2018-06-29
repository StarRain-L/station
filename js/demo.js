/**
 * Created by jr on 2018/6/17.
 */
(function () {

    //初始化
    function initData() {
        // var html = "<ul>";
        // var dataDic = [];
        // for(var i=0;i<20;i++){
        //     var oElement ={};
        //     oElement.stationName = randomstring(5);
        //     oElement.stationFullName = oElement.stationName;
        //     oElement.stationShortName = oElement.stationName;
        //     dataDic.push(oElement);
        // }
        // for (var i=0;i<dataDic.length;i++){
        //     var oElement = dataDic[i];
        //     html += "<li><b>"+oElement.stationName+"</b><span>"+oElement.stationFullName+"</span><span>"+oElement.stationShortName+"</span></li>"
        // }
        // html += "</ul>";
        // $("#allcitys").html(html);
    }
    //事件
    function addListener() {
        //获得输入框焦点
        $("#s_sousuo_text").focus(function () {
            $(this).addClass('sousuoFouce');
            $("#s_sousuo_cancel").show();
            $(".searchBg").show();
            $(".stationList").hide();
        })
        //获得输入框旁边取消
        $("#s_sousuo_cancel").click(function () {
            searchStationisappear();
        })
        $("#s_sousuo_text").bind("input propertychange",function () {
            if($("#s_sousuo_text").val().length == 0){
                // mainObject.searchStationisappear();
                // $(this).blur()
                $('.searchList ul').html("");
            } else {
                var value = $("#s_sousuo_text").val().toLowerCase();
                var arrReault = $("#allcitys li:contains("+value+")");
                if (arrReault.length > 0){
                    var search_html = "";
                    for (var n = 0; n<arrReault.length;n++){
                        search_html += "<li><span class='stationName'>"+arrReault.eq(n).find("b").html()+"</span></li>";
                    }
                }
                $('.searchList ul').html(search_html);
                //搜索车站列表cell点击
                $(".searchList ul li").click(function () {

                    var selectedCity =   $(this).find('.stationName').html();
                    alert(selectedCity);
                })
            }
        });
    }
    function searchStationisappear() {
        var fouceText =  $('.s_sousuo').find('.sousuoFouce');
        $(fouceText).removeClass('sousuoFouce')
        $(".stationList").show();
        $(".searchBg").hide();
        $("#s_sousuo_cancel").hide();
        $("#s_sousuo_text").val("");
        $('.searchList ul').html("");
    }
    //生成随机字符串
    function randomstring(len){
        var s= '';
        var randomchar=function(){
            var n= Math.floor(Math.random()*62);
            if(n<10) return n; //1-10
            if(n<36) return String.fromCharCode(n+55); //A-Z
            return String.fromCharCode(n+61); //a-z
        }
        while(s.length< len) s+= randomchar();
        return s;
    }
    function init() {
        initData();
        addListener();
    }
    init();
})();