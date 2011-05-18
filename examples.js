var mapId = 7022, layerId = 28098; 

(function () {
    var m, s = document.location.search;
    
    m = (s && s.match && s.match(/mid\=(\d+)/i));
    if (m && m[1]) {
        mapId = parseInt(m[1], 10);
    }
    
    m = (s && s.match && s.match(/lid\=(\d+)/i));
    if (m && m[1]) {
        layerId = parseInt(m[1], 10);
    }
    
})();