$.getJSON("./../../config/video/video.json", function(obj) {
    var items = [];
    $.each(obj, function(key, value) {
        items.push(value);
    });
    items.reverse();
    $.each(items, function(i, item) {
        $("#videoLista").append('\
            <div class="videoCont">\
                <a href="https://www.youtube.com/watch?v=dO3XRVy4N3s">\
                \
                <a href="' + item.link + '">\
                \
                <div class="miniatura">\
                    <img src="./../../image/' + item.Zdjecie + '" alt="Miniatura">\
                    <div class="bottom-right">' + item.Dlugosc + '</div>\
                </div>\
                \
                <div class="opis">\
                    <p>' + item.Tytul + '</p>\
                </div>\
                \
                <div class="autor">\
                    <a href="">' + item.Autor + '</a>\
                </div>\
                \
                </a>\
            </div>'
        );
    });
});
