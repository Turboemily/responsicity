/**
 * Created by mac on 16/4/16.
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

    var hiddenSection,showed;
    // 添加类名 使点击页面展现 和 之前页面消失
    function hiddenAndShow(){
        hiddenAndShowInit();
        var titleBtn = $("h3");
        titleBtn.on("click", function () {
            var id = $(this).attr("id");
            if(id == "actived"){
                $(this).next().toggle(200);
            }else {
                $("#actived").attr("id","");
                showed.removeClass("showed");
                $(this).next().addClass("showed");
                $(this).attr("id","actived");
                hiddenAndShowInit();
            }
        });
    }
    // 执行动画效果
    function hiddenAndShowInit(){
        hiddenSection = $(".hiddensection");
        showed = $(".showed");

        hiddenSection.hide();
        showed.fadeIn(500);
    }

    function init(){
        addSideBar();
        hiddenAndShow();
    }

    init();
})();
