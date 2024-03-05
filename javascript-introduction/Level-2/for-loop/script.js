const listCount = document.querySelectorAll(".list li").length;

function openTab(num) {
    $(".tab-button").removeClass("orange");
    $(".tab-button").eq(num).addClass("orange");
    $(".tab-content").removeClass("show");
    $(".tab-content").eq(num).addClass("show");
}
// for (let i = 0; i < listCount; i++) {
//     $(".tab-button")
//         .eq(i)
//         .on("click", function () {
//             openTab(i);
//         });
// }

$(".list").click(function (e) {
    // if (e.target == document.querySelectorAll(".tab-button")[0]) {
    //     openTab(0);
    // }
    // if (e.target == document.querySelectorAll(".tab-button")[1]) {
    //     openTab(1);
    // }
    // if (e.target == document.querySelectorAll(".tab-button")[2]) {
    //     openTab(2);
    // }

    openTab(e.target.dataset.id);
});
