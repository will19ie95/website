$(document).ready(function() {
    function scrollToAnchor(aid) {
        var aTag = $("div[id='" + aid + "']");
        $('html,body').animate({ scrollTop: aTag.offset().top }, 'slow');
    }

    $("#goto-home").click(function () {
        scrollToAnchor('myCarousel');
    });

    $("#goto-education").click(function () {
        scrollToAnchor('education');
    });

    $("#goto-skills").click(function () {
        scrollToAnchor('skills');
    });


})
