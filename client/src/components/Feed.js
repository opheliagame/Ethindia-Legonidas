import React, { Component } from 'react';
import FeedSidePane from './FeedSidePane';
import Timeline from './Timeline';
import './../styles/Feed.css';

class Feed extends Component {
    state = {
        name: "James Bond",
        rating: "4.5",
        skill1: "Node", 
        skill2: "C++",
        skill3: "Python",
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat.",
        prevPosts: null
    }

    componentWillMount () {
        this.updatePosts();
    }

    updatePosts = () => {
        let prevPosts = [
            {
                name: "James",
                requirement: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat.",
                "bounty": "0.5",
                "time": "2",
                key: 1
            }, {
                name: "Ricky",
                requirement: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat.",
                "bounty": "1.5",
                "time": "1",
                key: 2
            }, {
                name: "Jamal",
                requirement: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat.",
                "bounty": "200",
                "time": "2",
                key: 3
            }, {
                name: "Kartik",
                requirement: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat.",
                "bounty": "1",
                "time": "1",
                key: 4
            }, {
                name: "Jungli",
                requirement: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat.",
                "bounty": "111",
                "time": "11",
                key: 5
            }, {
                name: "Shaitaan",
                requirement: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat.",
                "bounty": "21",
                "time": "2",
                key: 6
            }, {
                name: "Dancer",
                requirement: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat.",
                "bounty": "101",
                "time": "4",
                key: 7
            }, 
        ]
        this.setState ({
            ...this.state,
            prevPosts
        })
    }

    render () {
        return (
            <div className="feed-super-container">
                <div className="row">
                    <div className="zero-pad col s12 m3 z-depth-1 hoverable">
                        
                            <FeedSidePane
                                name={this.state.name}
                                rating={this.state.rating}
                                skill1={this.state.skill1}
                                skill2={this.state.skill2}
                                skill3={this.state.skill3}
                                about={this.state.about}
                            />
                        
                    </div>

                    <div className="zero-pad col s12 m9">
                        <Timeline
                            prevPosts={this.state.prevPosts}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Feed;
