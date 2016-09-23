/**
 * Created by mac on 16/4/15.
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
    // 显示隐藏页面
    function hidden(){
        var hidden = $("#hidden");
        var btnNext = $("#btnnext");
        var iframe = $("iframe");

        btnNext.on("click", function () {
            hidden.hide();
            $(this).hide();
            iframe.show();
        });
    }

    function init(){
        addSideBar();
        hidden();
    }

    init();
})();
