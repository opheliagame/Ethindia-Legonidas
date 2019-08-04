import React, { Component } from 'react';
import './../styles/Video.css';
import AgoraRTC from 'agora-rtc-sdk';
import AgoraVideoCall from './AgoraVideoCall';

class VideoMainScreen extends Component {
    state = {
        channelId: this.props.channelId,
        appId: "ea9e6efd85324f208433a4b855fcef90",
        videoProfile: "720p_3",
        channel: "test",
        transcode: "interop",
        attendeeMode: "video",
        baseMode: "avc",
        uid: undefined
    }

    render () {
        return (
            <div className="wrapper meeting">
              
              <div className="ag-main">
                <div className="ag-container">
                  <AgoraVideoCall
                    videoProfile={this.state.videoProfile}
                    channel={this.state.channelId}
                    transcode={this.state.transcode}
                    attendeeMode={this.state.attendeeMode}
                    baseMode={this.state.baseMode}
                    appId={this.state.appId}
                    uid={this.state.uid}
                  />
                </div>
              </div>
            </div>
          );
    }
}

export default VideoMainScreen;