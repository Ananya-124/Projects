$(".main").click(function(){
    var boxinnerhtml = this.main;
    anime(boxinnerhtml);
})
function anime(currentbox) {
    var activebox = $("."+currentbox);
    activebox.addClass("new1")
    setTimeout(function () {
        activebox.removeClass("new1")
        
    }, 1000);
}