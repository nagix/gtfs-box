const SOURCES = [{
    label: '都営バス (東京)',
    gtfsUrl: 'https://api-public.odpt.org/api/v4/files/Toei/data/ToeiBus-GTFS.zip',
    vehiclePositionUrl: 'https://api-public.odpt.org/api/v4/gtfs/realtime/ToeiBus',
    color: '9FC105',
    zoom: 14,
    center: [139.7670, 35.6814],
    bearing: 0,
    pitch: 60
}, {
    label: '横浜市営バス (横浜)',
    gtfsUrl: 'https://api.odpt.org/api/v4/files/YokohamaMunicipal/data/YokohamaMunicipal-Bus-GTFS.zip',
    vehiclePositionUrl: 'https://api.odpt.org/api/v4/gtfs/realtime/YokohamaMunicipalBus_vehicle',
    color: '1B1464',
    zoom: 14,
    center: [139.62234, 35.46576],
    bearing: 0,
    pitch: 60
}, {
    label: '拓殖バス (帯広)',
    gtfsUrl: 'https://api.odpt.org/api/v4/files/odpt/HokkaidoTakushokuBus/Takusyoku_regular_line.zip?date=current',
    vehiclePositionUrl: 'https://api.odpt.org/api/v4/gtfs/realtime/odpt_HokkaidoTakushokuBus_Takusyoku_regular_line_vehicle',
    color: 'C73734',
    zoom: 14,
    center: [143.20355, 42.9182],
    bearing: 0,
    pitch: 60
}, {
    label: '青森市営バス (青森)',
    gtfsUrl: 'https://api-public.odpt.org/api/v4/files/odpt/AomoriCity/AllLines.zip?date=current',
    vehiclePositionUrl: 'https://api-public.odpt.org/api/v4/gtfs/realtime/odpt_AomoriCity_AllLines_vehicle',
    color: '16CD96',
    zoom: 14,
    center: [140.73501, 40.82824],
    bearing: 0,
    pitch: 60
}, {
    label: 'Tompkins Consolidated Area Transit (Ithaca, New York, USA)',
    gtfsUrl: 'https://realtimetcatbus.availtec.com/InfoPoint/GTFS-Zip.ashx',
    vehiclePositionUrl: 'https://realtimetcatbus.availtec.com/InfoPoint/GTFS-Realtime.ashx?&Type=VehiclePosition&serverid=0',
    color: '509FD3',
    zoom: 14,
    center: [-76.49709, 42.43962],
    bearing: 0,
    pitch: 60
}, {
    label: 'Link Transit (Wenatchee, Washington, USA)',
    gtfsUrl: 'https://link.rideralerts.com/InfoPoint/gtfs-zip.ashx',
    vehiclePositionUrl: 'https://link.rideralerts.com/InfoPoint/GTFS-Realtime.ashx?Type=VehiclePosition',
    color: '2D3F8B',
    zoom: 14,
    center: [-120.31254, 47.42591],
    bearing: 0,
    pitch: 60
}];

const matchLang = location.search.match(/lang=(.*?)(?:&|$)/),
    matchIndex = location.search.match(/index=(.*?)(?:&|$)/),
    matchGtfsUrl = location.search.match(/gtfsurl=(.*?)(?:&|$)/),
    matchVehiclePositionUrl = location.search.match(/gtfsvpurl=(.*?)(?:&|$)/),
    matchGtfsColor = location.search.match(/gtfscolor=(.*?)(?:&|$)/),
    matchHash = location.hash.match(/[^\d\.\-]*([\d\.\-]*)\/?([\d\.\-]*)\/?([\d\.\-]*)\/?([\d\.\-]*)\/?([\d\.\-]*)/),
    options = {
        container: 'map',
        dataUrl: 'data',
        accessToken: 'pk.eyJ1IjoibmFnaXgiLCJhIjoiY201emxlbGhkMDRqYjJxc2IzMnF0dzk5aCJ9.OxzbAxJoC_Myy13ypJ4EeA',
        searchControl: false,
        modeControl: false,
        plugins: [mt3dPrecipitation()]
    };
let initialIndex;

if (matchLang) {
    options.lang = decodeURIComponent(matchLang[1]);
}
if (matchIndex) {
    initialIndex = +decodeURIComponent(matchIndex[1]);
}
if (matchHash[1]) {
    options.zoom = +matchHash[1];
}
if (matchHash[2] && matchHash[3]) {
    options.center = [+matchHash[3], +matchHash[2]];
}
if (matchHash[4]) {
    options.bearing = +matchHash[4];
}
if (matchHash[5]) {
    options.pitch = +matchHash[5];
}
if (matchGtfsUrl && matchVehiclePositionUrl && matchGtfsColor) {
    options.dataSources = [{
        gtfsUrl: decodeURIComponent(matchGtfsUrl[1]),
        vehiclePositionUrl: decodeURIComponent(matchVehiclePositionUrl[1]),
        color: `#${decodeURIComponent(matchGtfsColor[1])}`
    }];
} else if (initialIndex === undefined) {
    initialIndex = 0;
}

const gtfsUrlElement = document.getElementById('gtfs-url'),
    vehiclePositionUrlElement = document.getElementById('gtfs-vp-url'),
    colorElement = document.getElementById('color'),
    zoomElement = document.getElementById('zoom'),
    latitudeElement = document.getElementById('latitude'),
    longitudeElement = document.getElementById('longitude'),
    bearingElement = document.getElementById('bearing'),
    pitchElement = document.getElementById('pitch');

function setValues(index, options) {
    if (index !== undefined) {
        const source = SOURCES[index];

        gtfsUrlElement.value = source.gtfsUrl;
        vehiclePositionUrlElement.value = source.vehiclePositionUrl;
        colorElement.value = `#${source.color}`;
        zoomElement.value = source.zoom;
        latitudeElement.value = source.center[1];
        longitudeElement.value = source.center[0];
        bearingElement.value = source.bearing;
        pitchElement.value = source.pitch;
        return;
    }
    gtfsUrlElement.value = options.dataSources[0].gtfsUrl;
    vehiclePositionUrlElement.value = options.dataSources[0].vehiclePositionUrl;
    colorElement.value = options.dataSources[0].color;
    zoomElement.value = options.zoom !== undefined ? options.zoom : '';
    latitudeElement.value = options.center[1] !== undefined ? options.center[1] : '';
    longitudeElement.value = options.center[0] !== undefined ? options.center[0] : '';
    bearingElement.value = options.bearing !== undefined ? options.bearing : '';
    pitchElement.value = options.pitch !== undefined ? options.pitch : '';
}

const selectElement = document.getElementById('select'),
    custom = initialIndex >= 0 ? '' : '<option selected>Custom</option>';

selectElement.innerHTML = custom + SOURCES.map(
    (source, i) => `<option value="${i}"${i === initialIndex ? ' selected': ''}>${source.label}</option>`
).join('');
selectElement.addEventListener('input', e => {
    if (+e.target.value >= 0) {
        setValues(+e.target.value);
    }
});
setValues(initialIndex, options);

const map = new mt3d.Map(options);

document.getElementById('github').addEventListener('click', e => {
    window.open('https://github.com/nagix/gtfs-box', '_blank');
});

const configContainer = document.getElementById('config-container');

document.getElementById('toggle').addEventListener('click', e => {
    const classList = e.target.classList;

    if (classList.toggle('fa-angle-down')) {
        configContainer.style.height = 0;
    }
    if (classList.toggle('fa-angle-up')) {
        configContainer.style.height = '160px';
    }
});
configContainer.addEventListener('transitionend', e => {
    map.map.resize();
});

document.getElementById('location').addEventListener('click', e => {
    const {lng, lat} = map.getCenter();

    zoomElement.value = map.getZoom();
    latitudeElement.value = lat;
    longitudeElement.value = lng;
    bearingElement.value = map.getBearing();
    pitchElement.value = map.getPitch();
});

document.getElementById('load').addEventListener('click', e => {
    const index = selectElement.value,
        source = SOURCES[index],
        gtfsUrl = gtfsUrlElement.value,
        vehiclePositionUrl = vehiclePositionUrlElement.value,
        color = colorElement.value.slice(1).toUpperCase(),
        zoom = +zoomElement.value,
        latitude = +latitudeElement.value,
        longitude = +longitudeElement.value,
        bearing = +bearingElement.value,
        pitch = +pitchElement.value,
        langParam = options.lang ? `lang=${options.lang}&` : '';
        indexParam = gtfsUrl === source.gtfsUrl &&
            vehiclePositionUrl === source.vehiclePositionUrl &&
            color === source.color &&
            zoom === source.zoom &&
            latitude === source.center[1] &&
            longitude === source.center[0] &&
            bearing === source.bearing &&
            pitch === source.pitch ?`index=${index}&` : '',
        params = `gtfsurl=${encodeURIComponent(gtfsUrl)}&gtfsvpurl=${encodeURIComponent(vehiclePositionUrl)}&gtfscolor=${color}#${zoom}/${latitude}/${longitude}/${bearing}/${pitch}`;

    window.location.href = `./?${langParam}${indexParam}${params}`;
});
