"use strict";
var GeneratorMarkup = (function(){
    function createHr(attribute){
        var hr = document.createElement("hr");
        attribute.appendChild(hr);
    }
    function createLi(data, idUl){
       if(data == null){
            return;
       }
       for(var i=0; i < data.length; i++){
               var li = document.createElement("li");
               var text = document.createTextNode(data[i].title);
               li.appendChild(text);
               var ul = document.getElementById(idUl);
               ul.appendChild(li);
               if((i + 1) != data.length){
                    createHr(ul);
               }
       }
    }
    function createImg(data, idDiv){
        if(data == null){
                return;
        }
        for(var i=0; i < data.length; i++){
               var img = document.createElement("img");
               img.src = data[i].url;
               var div = document.getElementById(idDiv);
               div.appendChild(img);
        }
    }
    function deleteImg(idDiv){
        var parent = document.getElementById(idDiv);
        while(parent.lastChild){
             parent.removeChild(parent.lastChild);
        }
    }
	return {
		createLi: createLi,
		createImg: createImg,
		deleteImg: deleteImg
	};
})();