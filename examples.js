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
            'src="https://d3nwyuy0nl342s.cloudfront.net/img/e6bef7a091f5f3138b8cd40bc3' +
            'e114258dd68ddf/687474703a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875' +
            '622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub"></a>');
    });
    
})();