import React, { Component } from 'react';
import './../styles/Feed.css';
import Avatar from './../assets/images/avatar.png';
import getWeb3 from "../utils/getWeb3";
import StreamsContract from "../contracts/Streams.json";

class Post extends Component{
    componentDidMount = async () => {
        try {
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

    async handleOnClick () {
        const { contract, accounts } = this.state;
        await contract.methods
            .acceptSkillRequest(this.props.key, this.props.uuid)
            .send({
                from: accounts[0]
            })
    }

    render() {
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
                            <h6 minus-margini-top><b>{this.props.name}</b></h6>
                        </div>

                        <div className="col s6 right-align">
                            <p><b>{this.props.bounty}</b> Eth/hour for <b>{this.props.time}</b> hours</p>
                        </div>
                    </div>

                    <p>{this.props.requirement}</p>
                </div>
                <div className="card-action">
                    <a className="accept-offer-btn waves-effect waves-light btn ">Accept Offer</a>
                </div>
            </div>
            </div>
        </div>
    )
    }
}

// const Post = (props) => {
//     return (
//         <div className="col s12 m12">
//             <div className="card horizontal hoverable">
//             <div className="card-stacked">
//                 <div className="card-content">
//                     <div className="row">
//                         <div className="col s1">
//                             <img class="responsive-img" src={Avatar} />
//                         </div>
//                         <div className="col s5">
//                             <h6 minus-margini-top><b>{props.name}</b></h6>
//                         </div>

//                         <div className="col s6 right-align">
//                             <p><b>{props.bounty}</b> Eth/hour for <b>{props.time}</b> hours</p>
//                         </div>
//                     </div>

//                     <p>{props.requirement}</p>
//                 </div>
//                 <div className="card-action">
//                     <a className="accept-offer-btn waves-effect waves-light btn ">Accept Offer</a>
//                 </div>
//             </div>
//             </div>
//         </div>
//     )
// }

class Timeline extends Component { 
    constructor(props) {
        super(props);
        this.handleNewRequest = this.handleNewRequest.bind(this);

    }

    componentDidMount = async() => {
        try {  
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
          this.setState({ web3, accounts, contract: instance }, this.runInit);
        } catch (error) {
          // Catch any errors for any of the above operations.
          alert(
            `Failed to load web3, accounts, or contract. Check console for details.`,
          );
          console.error(error);
        }
    
    }

    runInit = async() => {
        const { accounts, contract } = this.state;
    }

    async handleNewRequest(e) {
        e.preventDefault();
        console.log('handler');
        const description = e.target.description.value;
        const pricePerHour = e.target.pricePerHour.value;
        const maxTimeLimit = e.target.maxTimeLimit.value;

        if(description != '' && pricePerHour != '' && maxTimeLimit != '') {
            
        } else {
            alert('Please fill all the fields.');
        }
    }




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

                                    <form className="col s12" onSubmit={this.handleNewRequest}>
                                        <div className="row">
                                            <div className="zero-margin input-field col s12">
                                                <textarea name="description" id="textarea1" className="zero-margin materialize-textarea" placeholder="Enter the requirements"></textarea>
                                            </div>

                                            <div class="zero-margin input-field col s6">
                                                <input name="pricePerHour" id="bounty" type="text" class="validate" />
                                                <label for="bounty">Enter Bounty/hour</label>
                                            </div>
                                            <div class="zero-margin input-field col s6">
                                                <input name="maxTimeLimit" id="num-hours" type="tel" class="validate" />
                                                <label for="num-hours">Number of Hours</label>
                                            </div>

                                            <div style={{marginTop: "10px"}} className="col s12">
                                                <button className="accept-offer-btn waves-effect waves-light btn " type="submit">Request Service</button>
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