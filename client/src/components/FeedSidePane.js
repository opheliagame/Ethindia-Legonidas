import React, { Component } from 'react';
import './../styles/Feed.css';
import Avatar from './../assets/images/avatar.png';

class FeedSidePane extends Component {
    render () {
        return (
            <div className="valign-wrapper feed-sidepane-container">
                <div className="feed-sidepane-inner-container center-align">
                    <div className="feed-sidepane-row row">
                        <div className="feed-make-full-width col s12 m12">
                            <p className="center-align" id="personal-information">Personal Information</p>
                            <p id="main-name">{this.props.name}</p>
                            <p id="star-rating"><b>{this.props.rating} Star</b> Teacher</p>

                            <img src={Avatar} alt="Avatar" />

                            <p id="skills-top">Skills</p>
                            <p id="skills-value">{this.props.skill1} | {this.props.skill2} | {this.props.skill3}</p>

                            <p id="main-about">{this.props.about}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeedSidePane;