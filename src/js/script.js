"use strict";
$(document).ready(function(){
    var linkResource = 'http://jsonplaceholder.typicode.com/albums';
    var idAlbums = "albums";
    var idPhotos = "photos";
    $.ajax(linkResource, {
        method: 'GET'
            }).then(function(data) {
                GeneratorMarkup.createLi(data, idAlbums);
                $('li').on('click', function() {
                    var curLi = this.innerText;
                    var photos = ServerResource.getLink(linkResource, data, curLi, idPhotos);
                     $.ajax(photos, {
                        method: 'GET'
                     }).then(function(data) {
                        GeneratorMarkup.deleteImg(idPhotos);
                        GeneratorMarkup.createImg(data, idPhotos);
                     });
                });
	        });
});