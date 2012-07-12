var mapId = 7022, layerId = 28098; 

(function () {
    var m, s = document.location.search, $ = giscloud.exposeJQuery();
    
    m = (s && s.match && s.match(/mid\=(\d+)/i));
    if (m && m[1]) {
        mapId = parseInt(m[1], 10);
    }
    
    m = (s && s.match && s.match(/lid\=(\d+)/i));
    if (m && m[1]) {
        layerId = parseInt(m[1], 10);
    }
    
    $(function() {
        $("body").append(
            '<a href="https://github.com/giscloud/GIS-Cloud-Examples/">' + 
            '<img style="position: absolute; top: 0; right: 0; border: 0;" ' +
            'src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" alt="Fork me on GitHub"></a>');
    });
    
})();