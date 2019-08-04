import React, { Component } from "react";
import StreamsContract from "./contracts/Streams.json";
import getWeb3 from "./utils/getWeb3";
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


import "./App.css";
import { isUndefined } from "util";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  constructor(props) {
    super(props);
    this.addNewPersonToChain = this.addNewPersonToChain.bind(this);
    this.handleRegisterOnSubmit = this.handleRegisterOnSubmit.bind(this);
    this.handleNewSkillRequest = this.handleNewSkillRequest.bind(this);
    this.createSkillRequest = this.createSkillRequest.bind(this);
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
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  async createSkillRequest(skill, description, pricePerHour, maxTimeLimit, id) {
    alert(`Required value for this is ${pricePerHour * maxTimeLimit * 1.51}`)
    const { accounts, contract } = this.state;
      await contract.methods
        .createSkillRequest(skill, description, pricePerHour, maxTimeLimit, id)
        .send({
          from: accounts[0],
          value: pricePerHour * maxTimeLimit * 1.51
        });
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

  async handleNewSkillRequest(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const skill = data.get('skill');
    const description = data.get('description');
    const pricePerHour = data.get('pricePerHour');
    const maxTimeLimit = data.get('maxTimeLimit');
    if (!this.state.id) {
      alert('You haven\'t registered on the chain yet');
      return;
    }
    const creatorId = this.state.id;
    await this.createSkillRequest(skill, description, pricePerHour, maxTimeLimit, creatorId);
  }

  async handleRegisterOnSubmit(e) {
    e.preventDefault();
    console.log('handler');
    const data = new FormData(e.target);
    const name = data.get('name');
    if (name != '') {
      await this.addNewPersonToChain(name);
    } else alert('name is empty');

  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div>
        <form onSubmit={this.handleRegisterOnSubmit}>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' required/>

          <input type='submit' value='Submit' />
        </form>
        <form onSubmit={this.handleNewSkillRequest}>
          <label htmlFor='skill'>Skill</label>
          <input type='text' name='skill' required/>
          <label htmlFor='description'>Description</label>
          <input type='text' name='description' required/>
          <label htmlFor='pricePerHour'>Price Per Hour (Wei)</label>
          <input type='text' name='pricePerHour' required/>
          <label htmlFor='maxTimeLimit'>Max Time Limit (hours)</label>
          <input type='text' name='maxTimeLimit' required/>

          <input type='submit' value='submit request' />
        </form>
      </div>
    );
  }
}

export default App;
