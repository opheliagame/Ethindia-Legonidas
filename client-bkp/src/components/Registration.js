import React, { Component } from 'react';
import './../styles/Registration.css';
import M from 'materialize-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StreamsContract from "../contracts/Streams.json";
import getWeb3 from "../utils/getWeb3";

class Registration extends Component {


    constructor(props) {
        super(props);
        this.addNewPersonToChain = this.addNewPersonToChain.bind(this);
        this.handleRegisterOnSubmit = this.handleRegisterOnSubmit.bind(this);
    }

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
      this.setState({ web3, accounts, contract: instance }, this.runInit);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
      });
  };

  runInit = async () => {
      const { accounts, contract } = this.state;


  }

    async addNewPersonToChain(name) {
        try {
          console.log('new person eth');
          const { accounts, contract } = this.state;
          await contract.methods
            .createNewPerson(name)
            .send({ from: accounts[0] });
          // ! TODO fix
          const idPlusOne = await contract.uuid();
          console.log(idPlusOne);
          const id = idPlusOne - 1;
          this.setState({ id });
          console.log(this.state);
          return id;
        } catch (err) {
          console.log(err);
        }
      }

    async handleRegisterOnSubmit(e) {
        e.preventDefault();
        console.log('handler');
        const profile = e.target.profile.value;
        if (profile != '') {
          await this.addNewPersonToChain(profile);
        } else alert('name is empty');
    
      }

    async handleProfileChange(e) {
        this.setState({profile: e.target.value});
    }
    
    render () {
        return (
            <div className="registration valign-wrapper">
                <div className="container">
                    <div className="row">
                        <div id="left-column" className="col s8">
                            
                                <h2>Tell us about yourself.</h2>
                            
                            <div className="row">
                                <form className="col s12" onSubmit={this.handleRegisterOnSubmit}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <textarea name="profile" className="materialize-textarea" type="text" placeholder="Hi, I am Rahul and I love learning new skills."></textarea>
                                        </div>
                                        <div className="col s4 offset-s8">
                                            <button type="submit" className="btn-large">Update Profile</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div id="right-column" className="col s4">
                            <div className="row">
                                <div className="input-field col s10">
                                    <select name="" id="">
                                        <option value="1">Skill 1</option>
                                        <option value="2">Skill 2</option>
                                        <option value="3">Skill 3</option>
                                    </select>
                                </div>
                                <div className="col s2 valign-wrapper">
                                    <a className="btn-small">+</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s10">
                                    <select name="" id="">
                                        <option value="1">Skill 1</option>
                                        <option value="2">Skill 2</option>
                                        <option value="3">Skill 3</option>
                                    </select>
                                </div>
                                <div className="col s2 valign-wrapper">
                                    <a className="btn-small">+</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s10">
                                    <select name="" id="">
                                        <option value="1">Skill 1</option>
                                        <option value="2">Skill 2</option>
                                        <option value="3">Skill 3</option>
                                    </select>
                                </div>
                                <div className="col s2 valign-wrapper">

                                    <a className="btn-small valign">+</a>

                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            
        );
    }
}

export default Registration;
