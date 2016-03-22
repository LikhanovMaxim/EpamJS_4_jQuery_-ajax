"use strict";
var ServerResource = (function(){
    function getLink(curLink, data, curData, urlName){
        var index;
        for(var i = 0; i < data.length; i++){
            if(curData === data[i].title){
                index = i + 1;
                break;
            }
        }
        return curLink + "/" + index + "/" + urlName;
    }
	return {
		getLink: getLink
	};
})();