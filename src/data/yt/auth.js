var GoogleAuth;
var SCOPE = 'https://www.googleapis.com/auth/youtube.force-ssl';
let _Comment = 'Thanks';
let _Video = "J4s8Emhyo9g";

function handleClientLoad() {
    // Load the API's client and auth2 modules.
    // Call the initClient function after the modules load.
    gapi.load('client:auth2', initClient);

}

function initClient() {
    // Retrieve the discovery document for version 3 of Google Drive API.
    // In practice, your app can retrieve one or more discovery documents.
    var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';

    gapi.client.load('youtube', 'v3');
    // Initialize the gapi.client object, which app uses to make API requests.
    // Get API key and client ID from API Console.
    // 'scope' field specifies space-delimited list of access scopes.
    gapi.client.init({
        'apiKey': 'AIzaSyCOsdbh9nc4dEhUti3NsgA3c_6fYuc54Zg',
        'clientId': '516577184813-d24h9291fd1prpn97ctum009m4o6g0ln.apps.googleusercontent.com',
        'discoveryDocs': [discoveryUrl],
        'scope': SCOPE
    }).then(function(r) {
        GoogleAuth = gapi.auth2.getAuthInstance();
        console.log(gapi.auth2.client)
            // Listen for sign-in state changes.
        GoogleAuth.isSignedIn.listen(updateSigninStatus);

        // Handle initial sign-in state. (Determine if user is already signed in.)
        var user = GoogleAuth.currentUser.get();
        setSigninStatus();

        // Call handleAuthClick function when user clicks on
        //      "Sign In/Authorize" button.
        // $('#sign-in-or-out-button').click(function() {
        //     handleAuthClick();
        // });
        // $('#revoke-access-button').click(function() {
        //     revokeAccess();
        // });
    });
}

function LoginWithG() {
    var user = GoogleAuth.currentUser.get();
    var isAuthorized = user.hasGrantedScopes(SCOPE);
    if (!isAuthorized) {
        GoogleAuth.signIn();
    } else {
        console.log('Already login')
    }
}

function insertC() {
    var user = GoogleAuth.currentUser.get();
    var isAuthorized = user.hasGrantedScopes(SCOPE);
    if (isAuthorized) {
        gapi.client.youtube.commentThreads.insert({
            "part": "snippet",
            "snippet": {
                "videoId": _Video,
                "topLevelComment": {
                    "snippet": {
                        "textOriginal": _Comment
                    }
                }
            }
        }).then(console.log).catch(r => {
            console.log(r.result.error.errors[0])
        })
    } else {
        GoogleAuth.signIn().then(insertC);
    }
}

function insertL() {
    var user = GoogleAuth.currentUser.get();
    var isAuthorized = user.hasGrantedScopes(SCOPE);
    if (isAuthorized) {
        gapi.client.youtube.videos.rate({
            "id": _Video,
            "rating": "like"
        })

    } else {
        GoogleAuth.signIn().then(insertL);
    }

}

function handleAuthClick() {
    if (GoogleAuth.isSignedIn.get()) {
        // User is authorized and has clicked 'Sign out' button.
        GoogleAuth.signOut();
    } else {
        // User is not signed in. Start Google auth flow.
        GoogleAuth.signIn();
    }
}

function revokeAccess() {
    GoogleAuth.disconnect();
}

function setSigninStatus(isSignedIn) {
    var user = GoogleAuth.currentUser.get();
    var isAuthorized = user.hasGrantedScopes(SCOPE);
    if (isAuthorized) {
        $('#sign-in-or-out-button').html('Sign out');
        $('#revoke-access-button').css('display', 'inline-block');
        $('#auth-status').html('You are currently signed in and have granted ' +
            'access to this app.');
    } else {
        $('#sign-in-or-out-button').html('Sign In/Authorize');
        $('#revoke-access-button').css('display', 'none');
        $('#auth-status').html('You have not authorized this app or you are ' +
            'signed out.');
    }
}

function updateSigninStatus(isSignedIn) {
    setSigninStatus();
}