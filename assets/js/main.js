$(document).ready(function() {
    $("#title").click(function() {
        window.location = "/";
    });

    /******* Add fading animations. *******/
    $("#title").hover(function() {
        $("#title").addClass("slow-highlight");
    });
    $("span a").hover(function() {
        $("span a").addClass("fast-highlight");
    });
    $("#about-me-icon").hover(function() {
        $("#about-me-icon").addClass("fade");
    });
    $("#my-github-icon").hover(function() {
        $("#my-github-icon").addClass("fade");
    });
    $("#my-projects-icon").hover(function() {
        $("#my-projects-icon").addClass("fade");
    });

    /******* Typing animation. *******/
    new TypeIt('#index-title', {
        strings: ['<b>./jqProjects</b>'],
        html: true,
        speed: 100,
        lifeLike: true
    });
});
