import React, { Component } from 'react';
import './../styles/Video.css';

class VideoSidePane extends Component {
    render () {
        console.log ("MENTOR NAME - ", this.props.mentorName);
        return (
            <div className="video-side-pane-container row">
                <div className="col s12">
                    <h4 className="white-text">#SKIDL</h4>
                </div>

                {/* Mentor Name */}
                <div className="col 12">
                    <p className="sidepane-category white-text">MENTOR NAME:</p>
                    <p className="sidepane-value white-text"><b>{this.props.mentorName}</b></p>
                </div>

                {/* Student Name */}
                <div className="col 12">
                    <p className="sidepane-category white-text">STUDENT NAME:</p>
                    <p className="sidepane-value white-text"><b>{this.props.studentName}</b></p>
                </div>

                {/* Topic */}
                <div className="col 12">
                    <p className="sidepane-category white-text">DESCRIPTION:</p>
                    <p className="sidepane-value white-text">{this.props.sessionDetails}</p>
                </div>
            </div>
        );
    }
}

export default VideoSidePane;