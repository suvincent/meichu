import React, { Component } from 'react';
import{Link}from '../routes';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {Card,Table,Row,Spinner} from 'react-bootstrap';
import {Router}from '../routes';
import Jitsi from './jitsi';
//

class Index1 extends Component {
    constructor(props) {
      super(props);
      this.state ={
        vm:null,
        userlist:[]
    };
    this.getuserinfo = this.getuserinfo.bind(this);
  }
  componentDidMount() {
    let vm =  new window.JitsiMeetExternalAPI("meet.jit.si/", {
      roomName: 'JitsiMeetAPIExample',
      width: 500,
      height: 300,
      parentNode: document.getElementById('start'),
    })

    this.setState({vm:vm});
  }

  async getuserinfo() {
    let arr = await this.state.vm.getParticipantsInfo();
    let device = await this.state.vm.getCurrentDevices();
    console.log(arr);
    console.log(device);
    this.setState({userlist:arr});
  }
    render() {
        return(
          <>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"/>

          
          <div id="start"> 
              
          </div>

          <button onClick={this.getuserinfo}></button>
         </>
    )
    }
}


export default Index1;