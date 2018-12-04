var markers = [];
var positions = [[103.724386, 36.107072], [103.724386, 36.106075],[103.724386, 36.106069],[103.724386, 36.106045]];


for (var i = 0, marker; i < positions.length; i++) {
    marker = new AMap.Marker({
        map: map,
        position: positions[i],
        icon: 'https://dropmefiles.com/SXXAL',
        offset: new AMap.Pixel(-13, -30)
    });
    markers.push(marker);
}