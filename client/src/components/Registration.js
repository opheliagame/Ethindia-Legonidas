import React, { Component } from 'react';
import './../styles/Registration.css';
import M from 'materialize-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Registration extends Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems);
          });
    }
    
    render () {
        return (
            <div className="registration valign-wrapper">
                <div className="container">
                    <div className="row">
                        <div id="left-column" className="col s8">
                            
                                <h2>Tell us about yourself.</h2>
                            
                            <div className="row">
                                <form className="col s12">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <textarea className="materialize-textarea" type="text" placeholder="Hi, I am Rahul and I love learning new skills."></textarea>
                                        </div>
                                        <div className="col s4 offset-s8">
                                            <a className="btn-large">Update Profile</a>
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
                                    <a className="btn-small"><FontAwesomeIcon icon="fas fa-plus" /></a>
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
                                    <a className="btn-small"><FontAwesomeIcon icon="fas fa-plus" /></a>
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

                                    <a className="btn-small valign"><FontAwesomeIcon icon="fas fa-plus" /></a>

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
