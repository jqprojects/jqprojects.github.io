$(document).ready(function() {
    $("#title").click(function() {
        window.location = "/";
    });

    new TypeIt('#index-title', {
        strings: ['<b>./jqProjects</b>'],
        html: true,
        speed: 100
    });
});
