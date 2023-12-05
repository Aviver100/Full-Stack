let targetLocation = {
    latitude: 31.5204,
    longitude: 34.4662
};

const arrow: HTMLElement | null = document.getElementById("arrow");

if (!arrow) {
    console.error("Arrow element not found.");
} else {
    if ("geolocation" in navigator && "DeviceOrientationEvent" in window) {
        const options = { enableHighAccuracy: true };
        
        navigator.geolocation.watchPosition(
            (position) => {
                updateArrowRotation(position);
            },
            (error) => {
                console.error("Geolocation error: " + error.message);
            },
            options
        );

        window.addEventListener("deviceorientation", handleOrientation, true);
    } else {
        console.error("Geolocation or device orientation is not available in your browser.");
    }
}

function updateArrowRotation(userLocation: GeolocationPosition) {
    const userLatLng = {
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude
    };

    const angle = calculateAngle(userLatLng, targetLocation);

    if (arrow) {
        arrow.style.transform = `rotate(${angle}deg)`;
    }
}

function calculateAngle(userLatLng, targetLatLng) {
    const userLat = userLatLng.latitude;
    const userLng = userLatLng.longitude;
    const targetLat = targetLatLng.latitude;
    const targetLng = targetLatLng.longitude;

    const y = Math.sin(targetLng - userLng);
    const x = Math.cos(userLat) * Math.tan(targetLat) - Math.sin(userLat) * Math.cos(targetLng - userLng);

    let brng = Math.atan2(y, x);

    // Convert from radians to degrees
    brng = (brng * 180) / Math.PI;

    // Ensure the angle is between 0 and 360 degrees
    if (brng < 0) {
        brng += 360;
    }

    return brng;
}




function handleOrientation(event: DeviceOrientationEvent) {
    if (event.alpha !== null) {
        if (arrow) {
            arrow.style.transform = `rotate(${event.alpha}deg)`;
        }
    }
}
