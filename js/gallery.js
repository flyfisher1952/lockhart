
function onMouseDown(t) {
    $('.galleryPreview').html('');

    var src = $(t).attr('src');
    var alt = $(t).attr('alt');
    src = src.replace('-thumbnail', '');
    $('.galleryPreview').html('<img src="' + src + '" style="height: 100%;"/><span>' + alt + '</span>');
}
