function initMap() {
    const uluru = { lat: 10.780043081248142, lng: 106.69994515839129 };

    const uluru1 = { lat: 21.02761757367215, lng: 105.83548241321816 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: uluru,
    });
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,

        animation: google.maps.Animation.DROP,
        icon: {
            url: "sg-central-post.jpg",
            scaledSize: { width: 50, height: 50 },
        },
    });

    const marker1 = new google.maps.Marker({
        position: uluru1,
        map: map,

        animation: google.maps.Animation.DROP,
        icon: {
            url: "van-mieu.jpg",
            scaledSize: { width: 50, height: 50 },
        },
    });

    const outerCoords = [
        { lat: 10.78552991712617, lng: 106.87466359520877 },
        { lat: 11.027118038378331, lng: 106.59176464287475 },
        { lat: 10.482950222143012, lng: 106.56724833292282 },
    ];

    const innerCoords = [
        { lat: 10.895191656711592, lng: 106.67870097914356 },
        { lat: 10.718661292530722, lng: 106.80097155275692 },
        { lat: 10.725277552029164, lng: 106.59560338431415 },
    ];

    var circle1 = new google.maps.Circle({
        map: map,
        center: new google.maps.LatLng(10.780043081248142, 106.69994515839129),
        radius: 13000,
        strokeColor: "yellow",

    });

    const triangle1 = new google.maps.Polygon({
        paths: outerCoords,
        strokeColor: "green",
        strokeOpacity: 1,
        strokeWeight: 2,
        editable: true,
        draggable: true
    });
    triangle1.setMap(map);

    const triangle2 = new google.maps.Polygon({
        paths: innerCoords,
        strokeColor: "blue",
        strokeOpacity: 1,
        strokeWeight: 2,
        editable: true,
        draggable: true
    });
    triangle2.setMap(map);

    const outerCoords1 = [
        { lat: 21.045846030587217, lng: 105.5853672646467 },
        { lat: 20.821052349925445, lng: 105.93332578823338 },
        { lat: 21.227692162603706, lng: 105.99504052122592 },
    ];

    const innerCoords1 = [
        { lat: 20.94720090029461, lng: 105.92502455554609 },
        { lat: 21.132463783707035, lng: 105.88949508438354 },
        { lat: 21.007721300407308, lng: 105.71237975554664 },
    ];

    var circle2 = new google.maps.Circle({
        map: map,
        center: new google.maps.LatLng(21.02761757367215, 105.83548241321816),
        radius: 13000,
        strokeColor: "blue"
    });

    const triangle3 = new google.maps.Polygon({
        paths: outerCoords1,
        strokeColor: "red",
        strokeOpacity: 1,
        strokeWeight: 2,
        editable: true,
        draggable: true
    });
    triangle3.setMap(map);

    const triangle4 = new google.maps.Polygon({
        paths: innerCoords1,
        strokeColor: "yellow",
        strokeOpacity: 1,
        strokeWeight: 2,
        editable: true,
        draggable: true
    });
    triangle4.setMap(map);

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    var request = {
        origin: "2 Công xã Paris, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Vietnam",
        destination: "58 Quốc Tử Giám, Văn Miếu, Đống Đa, Hà Nội 100000, Vietnam",
        travelMode: "DRIVING",
    };
    directionsService.route(request, function(response, status) {
        if (status == "OK") {
            directionsRenderer.setDirections(response);
        }
    });

    marker.addListener("click", () => {
        var infowindow = new google.maps.InfoWindow({
            content: "Saigon Central Post Office Tours and Activities.",
        });

        infowindow.open(map, marker);
    });
    marker1.addListener("click", () => {
        var infowindow = new google.maps.InfoWindow({
            content: "Confucian temple with landscaped courtyards, numerous altars & shrines & an imposing front gate.",
        });

        infowindow.open(map, marker1);
    });


}