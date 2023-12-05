var targetLocation = {
    latitude: 31.5204,
    longitude: 34.4662
};
var arrow = document.getElementById("arrow");
if (!arrow) {
    console.error("Arrow element not found.");
}
else {
    if ("geolocation" in navigator && "DeviceOrientationEvent" in window) {
        var options = { enableHighAccuracy: true };
        navigator.geolocation.watchPosition(function (position) {
            updateArrowRotation(position);
        }, function (error) {
            console.error("Geolocation error: " + error.message);
        }, options);
        window.addEventListener("deviceorientation", handleOrientation, true);
    }
    else {
        console.error("Geolocation or device orientation is not available in your browser.");
    }
}
function updateArrowRotation(userLocation) {
    var userLatLng = {
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude
    };
    var angle = calculateAngle(userLatLng, targetLocation);
    if (arrow) {
        arrow.style.transform = "rotate(" + angle + "deg)";
    }
}
function calculateAngle(userLatLng, targetLatLng) {
    var userLat = userLatLng.latitude;
    var userLng = userLatLng.longitude;
    var targetLat = targetLatLng.latitude;
    var targetLng = targetLatLng.longitude;
    var y = Math.sin(targetLng - userLng);
    var x = Math.cos(userLat) * Math.tan(targetLat) - Math.sin(userLat) * Math.cos(targetLng - userLng);
    var brng = Math.atan2(y, x);
    // Convert from radians to degrees
    brng = (brng * 180) / Math.PI;
    // Ensure the angle is between 0 and 360 degrees
    if (brng < 0) {
        brng += 360;
    }
    return brng;
}
function handleOrientation(event) {
    if (event.alpha !== null) {
        if (arrow) {
            arrow.style.transform = "rotate(" + event.alpha + "deg)";
        }
    }
}
