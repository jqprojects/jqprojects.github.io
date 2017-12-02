$(document).ready(function() {
    $("#title").click(function() {
        window.location = "/";
    });

    // $("#test").typed({
    //     strings: ["This is a test."],
    //     showCursor: true,
    //     cursorChar: '_',
    //     autoInsertCss: true
    // });
    new TypeIt('#index-title', {
        strings: ['<b>./jqProjects</b>'],
        html: true,
        speed: 100
    });
});
