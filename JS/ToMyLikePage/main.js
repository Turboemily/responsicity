/**
 * Created by mac on 16/4/14.
 */

(function () {
    // 响应式左上角隐藏菜单
    function addSideBar(){
        var btn = $("#leftbtn");
        var sideBarContainer = $("#sidebarcontaine");
        btn.on("click", function () {
            sideBarContainer.fadeIn();
        });
        sideBarContainer.on("click", function () {
            sideBarContainer.fadeOut();
        });
    }
    // 鼠标滑过显示敬请期待
    function disabled(){
        var disableds = $(".disabled");
        disableds.on("click", function () {
            return false;
        });
        disableds.on("mouseover", function (e) {
            $(this).append("<div class='adddiv'>即将开通,敬请期待</div>");
            var div = $(".adddiv");
            div.css({
                left: e.clientX-70,
                right: e.clientY,
            });
        });
        disableds.on("mouseout", function () {
            $(this).find(".adddiv").hide();
        });
    }
    // 隐藏下拉列表
    function btnMore(){
        var btnMore = $("#btn-more");

        var hidenElement = $(".province li:gt(9)");
        hidenElement.hide();
        btnMore.on("click", function () {
            if(hidenElement.is(":visible")){
                hidenElement.hide();
                btnMore.text("更多")
            }else{
                hidenElement.show(); //显示全部品牌
                btnMore.text("收起");
            }
        });
    }

    function init(){
        addSideBar();
        disabled();
        btnMore();
    }

    init();
})();
