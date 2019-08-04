import React, { Component } from 'react';
import './../styles/Feed.css';
import Avatar from './../assets/images/avatar.png';

const Post = (props) => {
    return (
        <div className="col s12 m12">
            <div className="card horizontal hoverable">
            <div className="card-stacked">
                <div className="card-content">
                    <div className="row">
                        <div className="col s1">
                            <img class="responsive-img" src={Avatar} />
                        </div>
                        <div className="col s5">
                            <h6 minus-margini-top><b>{props.name}</b></h6>
                        </div>

                        <div className="col s6 right-align">
                            <p><b>{props.bounty}</b> Eth/hour for <b>{props.time}</b> hours</p>
                        </div>
                    </div>

                    <p>{props.requirement}</p>
                </div>
                <div className="card-action">
                    <a className="accept-offer-btn waves-effect waves-light btn ">Accept Offer</a>
                </div>
            </div>
            </div>
        </div>
    )
}

class Timeline extends Component { 
    render () {
        return (
            <div className="timeline-container">
                <div className="new-request">
                    <div className="col s12 m12">
                        <div className="card horizontal hoverable">
                            <div className="card-stacked">
                                <div className="remove-bottom-pad card-content">
                                    <div className="row">
                                        <div className="col s1">
                                            <img class="responsive-img" src={Avatar} />
                                        </div>
                                        <div className="col s5">
                                            <h6 className="minus-margini-top"><b>New Request</b></h6>
                                        </div>
                
                                        <div className="col s6 right-align">
                                            <p>Please enter your request with bounty</p>
                                        </div>
                                    </div>

                                    <form className="col s12">
                                        <div className="row">
                                            <div className="zero-margin input-field col s12">
                                                <textarea id="textarea1" className="zero-margin materialize-textarea" placeholder="Enter the requirements"></textarea>
                                            </div>

                                            <div class="zero-margin input-field col s6">
                                                <input id="bounty" type="text" class="validate" />
                                                <label for="bounty">Enter Bounty/hour</label>
                                            </div>
                                            <div class="zero-margin input-field col s6">
                                                <input id="num-hours" type="tel" class="validate" />
                                                <label for="num-hours">Number of Hours</label>
                                            </div>

                                            <div style={{marginTop: "10px"}} className="col s12">
                                                <a className="accept-offer-btn waves-effect waves-light btn ">Request Service</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="old-requests">
                    {
                        this.props.prevPosts.map (post => {
                            return (
                                <Post 
                                    key={post.key} 
                                    name={post.name} 
                                    bounty={post.bounty}
                                    time={post.time}
                                    requirement={post.requirement}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );    
    }
}

export default Timeline;