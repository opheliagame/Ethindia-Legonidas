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

    componentDidMount = async () => {
            try {
                document.addEventListener('DOMContentLoaded', function () {
                    var elems = document.querySelectorAll('select');
                    var instances = M.FormSelect.init(elems);
                });

                this.getVideoDetails();

                // Get network provider and web3 instance.
                const web3 = await getWeb3();

                // Use web3 to get the user's accounts.
                const accounts = await web3.eth.getAccounts();

                // Get the contract instance.
                const networkId = await web3.eth.net.getId();
                const deployedNetwork = StreamsContract.networks[networkId];
                const instance = new web3.eth.Contract(
                    StreamsContract.abi,
                    deployedNetwork && deployedNetwork.address,
                );

                // Set web3, accounts, and contract to the state, and then proceed with an
                // example of interacting with the contract's methods.
                this.setState({
                    web3,
                    accounts,
                    contract: instance
                }, this.runInit);
            } catch (error) {
                // Catch any errors for any of the above operations.
                alert(
                    `Failed to load web3, accounts, or contract. Check console for details.`,
                );
                console.error(error);
            }

        }

    // Get the IDS
    async getVideoDetails () {
        // const { accounts, contract } = this.state;
        // await contract.methods
        //     .acceptSkillRequest()

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
        )
    }
}

export default Video;
