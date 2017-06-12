$(function () {
    $(".article-preview").slice(0, 9).show();
    $("#read-more").on('click', function (e) {
        e.preventDefault();
        $(".article-preview:hidden").slice(0, 9).slideDown();
        if ($(".article-preview:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
});
