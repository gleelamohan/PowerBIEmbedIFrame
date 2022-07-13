/**
 * Spotify live app.
 */

var kPlaylistHeight = 380;
var kTrackHeight = 80;
var kSpotifyWidth = 300;

class SpotifyRoot extends quip.apps.RootRecord {
    static getProperties() {
        return {
            src: "string",
            isPlaylist: "boolean",
        };
    }
}
quip.apps.registerClass(SpotifyRoot, "root");

quip.apps.initialize({
    initializationCallback: function (root, params) {
        root.innerHTML =
            `<iframe  width="1140" height="640" 
            src="https://app.powerbi.com/reportEmbed?reportId=26e308d4-1010-4054-9b7b-8a7f135e6c89&groupId=d9e3cb0a-4b1e-4f8a-89d4-17c9a835bf82&autoAuth=true&ctid=20210462-2c5e-4ec8-b3e2-0be950f292ca&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D" 
            frameborder="0" ></iframe>`;
        var iframe = root.firstChild;
        quip.apps.registerEmbeddedIframe(iframe);
    },
});
