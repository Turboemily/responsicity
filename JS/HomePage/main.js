/**
 * Created by mac on 16/4/13.
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
    //图片轮播效果
    function addSlidePic(){
        var photoObj = {
            img1:"HomePage/img/slide1.jpg",
            img2:"HomePage/img/slide2.jpg",
            img3:"HomePage/img/slide3.jpg",
            img4:"HomePage/img/slide4.jpg",
            img5:"HomePage/img/slide5.jpg",
        };

        var num = 2;
        var slideContainer =$("#slidecontainer");

        function changePhoto(){
            if(num>5){
                num = 1;
            }
            slideContainer.attr("src",photoObj["img"+num]);
            num++;
        }
        setInterval(changePhoto,3000);
    }

    function init(){
        addSideBar();
        addSlidePic();
    }

    init();
})();
