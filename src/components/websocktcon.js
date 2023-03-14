import Pusher from "pusher-js";
import AuthUser from "./AuthUser";
export default function websoption(){
    const{getToken}=AuthUser();
    console.log(getToken());
    var pusher = new Pusher("e1177b6b094a5374d2d1", {
           cluster: 'ap2',
        channelAuthorization: {
          transport: "jsonp",
          endpoint: "http://myserver.com/pusher_jsonp_auth",
        },
      });
    Pusher.logToConsole = true;
    return {
        broadcaster: "pusher",
        key:'e1177b6b094a5374d2d1',
        cluster: 'ap2',
        //authEndpoint is your apiUrl + /broadcasting/auth
        authEndpoint: "http://127.0.0.1:8000/broadcasting/auth",
        // As I'm using JWT tokens, I need to manually set up the headers.
        auth: {
            headers: {
                Authorization: "Bearer"+getToken(),
                Accept: "application/json"
            }
        },
        wsPort: 6001,
        // wssPort:6001,
        forceTLS:false,
        enabledTransports: ['ws', 'wss'],
        
    }
}

// export default echo = new Echo(options);
