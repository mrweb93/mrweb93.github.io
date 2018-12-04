var map = new AMap.Map('container', {
    center: [103.724386, 36.107072],
    zooms: [4,18],
    zoom: 17,
    pitch:0,
    viewMode:'3D'
});

AMap.plugin('AMap.Geolocation', function() {
    var geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,
        timeout: 10000,
        buttonPosition:'RB',
        buttonOffset: new AMap.Pixel(10, 20),
        zoomToAccuracy: true,

    });
    map.addControl(geolocation);
    geolocation.getCurrentPosition(function(status,result){
        if(status=='complete'){
            onComplete(result)
        }else{
            onError(result)
        }
    });
});

function onComplete(data)
{
    console.log("Status Complet: "+ data.position+", "+ data.location_type+", "+ data.accuracy);
}

function onError(data)
{
    console.log("Status Error: "+data.message);
}

var markers = [];
var positions = [[103.724386, 36.107072], [103.724386, 36.106075],[103.724386, 36.106069],[103.724386, 36.106045]];


map.on("complete", function(){
    log.success("Сomplete loading map！");
});

for (var i = 0, marker; i < positions.length; i++) {
    marker = new AMap.Marker({
        map: map,
        position: positions[i],
        icon: 'img/qr-code.png',
        offset: new AMap.Pixel(-13, -30)
    });
    markers.push(marker);
}
/////////////////////////

/////////////////////////