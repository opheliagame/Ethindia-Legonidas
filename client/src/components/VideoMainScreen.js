import React, { Component } from 'react';
import './../styles/Video.css';
import AgoraRTC from 'agora-rtc-sdk';

class VideoMainScreen extends Component {
    state = {
        channelId: this.props.channelId
    }

    componentDidMount () {
        this.joinVideoCall ();
    }

    joinVideoCall = () => {
        if(!AgoraRTC.checkSystemRequirements()) {
            alert("browser does not support webRTC");
        }

        let client = AgoraRTC.createClient({mode: 'live', codec: "h264"});
        let channel_key = null;
        let localStream;
        const channelId = this.props.channelId;

        client.init(this.props.appId, function () {
            console.log("AgoraRTC client initialized");

            client.join(channel_key, channelId, null, function(uid) {
                console.log("User " + uid + " join channel successfully");
                
                localStream = AgoraRTC.createStream({
                    streamID: uid,
                    audio: true,
                    video: true,
                    screen: false}
                );

                // The user has granted access to the camera and mic.
                localStream.on("accessAllowed", function() {
                    console.log("accessAllowed");
                });

                // The user has denied access to the camera and mic.
                localStream.on("accessDenied", function() {
                    console.log("accessDenied");
                });

                console.log ("DOC IFDDD - ", document.getElementById("agora_local"));
                
                localStream.init(function() {
                    console.log("getUserMedia successfully");
                    console.log ("DOC IFDDD - ", document.getElementById("agora_local"));
                    localStream.play('agora_local');

                    client.publish(localStream, function (err) {
                        console.log("Publish local stream error: " + err);
                    });

                    client.on('stream-published', function (evt) {
                        console.log("Publish local stream successfully");
                    });
                }, function (err) {
                    console.log("getUserMedia failed", err);
                });
                
            }, function(err) {
                console.log("Join channel failed", err);
            });

        }, function (err) {
            console.log("AgoraRTC client init failed", err);
        });

        let channelKey = "";
        client.on('error', function(err) {
            console.log("Got error msg:", err.reason);
            if (err.reason === 'DYNAMIC_KEY_TIMEOUT') {
                client.renewChannelKey(channelKey, function(){
                    console.log("Renew channel key successfully");
                }, function(err){
                    console.log("Renew channel key failed: ", err);
                });
            }
        });

        client.on('stream-added', function (evt) {
            var stream = evt.stream;
            console.log("New stream added: " + stream.getId());
            console.log("Subscribe ", stream);
            client.subscribe(stream, function (err) {
               console.log("Subscribe stream failed", err);
            });
        });

        client.on('stream-subscribed', function (evt) {
            var remoteStream = evt.stream;
            console.log("Subscribe remote stream successfully: " + remoteStream.getId());
            remoteStream.play('agora_remote' + remoteStream.getId());
        });

        localStream.init(function() {
            console.log("getUserMedia successfully");
            // Use agora_local as the ID of the dom element
            // console.log ("DOC IFDDD - ", document.getElementById("agora_local"));
            localStream.play('agora_local');
        }, function (err) {
            console.log("getUserMedia failed", err);
        });

        client.on('stream-subscribed', function (evt) {
            var remoteStream = evt.stream;
            console.log("Subscribe remote stream successfully: " + remoteStream.getId());
            // Use agora_remote + remoteStream.getId() as the ID of the dom element
            remoteStream.play('agora_remote' + remoteStream.getId());
        });

        client.leave(function () {
            console.log("Leave channel successfully");
        }, function (err) {
            console.log("Leave channel failed");
        });



    }

    render () {
        return (
            <div className="video-mainscreen-container">
                <div style={{display: "none"}} id="div_device" className="panel panel-default">
                    <div className="select">
                        <label for="audioSource">Audio source: </label><select id="audioSource"></select>
                    </div>
                    <div className="select">
                        <label for="videoSource">Video source: </label><select id="videoSource"></select>
                    </div>
                </div>

                <div className="row">
                    <div id="video" className="col s12">
                        <div id="agora_local"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoMainScreen;