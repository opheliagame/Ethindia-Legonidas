import React, { Component } from 'react';
import VideoSidePane from './VideoSidePane';
import VideoMainScreen from './VideoMainScreen';
import './../styles/Video.css';
import uuidv1 from 'uuid/v1';

class Video extends Component {
    state = {
        APP_ID: null,
        CHANNEL_ID: null,
        meetingTime: null,
        isMeetingTime: false,
        mentorName: null,
        studentName: null,
        topic: null,
        sessionDetails: null
    }

    componentDidMount () {
        this.getVideoDetails ();
    }

    // Get the IDS
    getVideoDetails = () => {
        // Replace by code to get the video details
        const channelId = "GoodBoiz";
        const mentorName = "James Bond";
        const studentName = "John Cena";
        const topic = "How to learn calculus";
        const sessionDetails = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, *sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        // set meeting time to time from smart contract (for now I am setting it as Date.now())
        const meetingTime = Date.now();
        console.log ("Setting State now! 00000");
        if (this.checkIsMeetingTime ()) {
            this.setState ({
                APP_ID: "ea9e6efd85324f208433a4b855fcef90",
                CHANNEL_ID: channelId,
                meetingTime, mentorName, studentName,
                topic, sessionDetails,
                isMeetingTime: true
            });
        } else {
            this.setState ({
                ...this.state,
                APP_ID: "ea9e6efd85324f208433a4b855fcef90",
                CHANNEL_ID: channelId,
                meetingTime, mentorName, studentName,
                topic, sessionDetails
            });
        }
    }

    checkIsMeetingTime = () => {
        if (Date.now() < this.state.meetingTime) {
            // Handle Meeting not started case
            return false;
        }

        return true;
    }

    // Check whether it is meeting time

    render () {
        console.log ('MENTOR NAMEEEEEE- ', this.state.mentorName);
        return (
            <div>
            {
                this.state.isMeetingTime
                    ? <div className="video-super-container">
                        <div className="row">
                            <div className="video-side-super-container col s12 m3">
                                <VideoSidePane
                                    mentorName={this.state.mentorName}
                                    studentName={this.state.studentName}
                                    topic={this.state.topic}
                                    sessionDetails={this.state.sessionDetails}
                                />
                            </div>
        
                            <div className="zero-pad video-main-super-container col s12 m9">
                                <VideoMainScreen
                                    topic={this.state.topic}
                                    appId={this.state.APP_ID}
                                    channelId={this.state.CHANNEL_ID}
                                />
                            </div>
                        </div>
                    </div>
                    : <div>Loading</div>
            }
            </div>
        );
    }
}

export default Video;
