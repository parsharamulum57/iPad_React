import './App.css';
import Buttons from './Buttons';
import React from 'react';
import ZingTouch from 'zingtouch';
import Screen from './Screen';

class App extends React.Component {

  constructor(){
    super();
    this.firstTime=true;
    this.state= {
      locked: true,
      homeMenuItemIndex: 0,
      childLevel: 0,
      subMenuItemIndex:0
      
    }
    this.angle= 0;
    
  }



  componentDidMount(){
    if(this.firstTime===true)
    {
      this.firstTime=false;
      this.move();  
    }
  }



  move = () => {

   // console.log(this.state.locked);
    
                    
    const containerElement = document.getElementById('outer-circle');
    //console.log(containerElement);
    const activeRegion = ZingTouch.Region(containerElement);
    //console.log("activeRegion ",activeRegion);
    const childElement = document.getElementById("outer-circle");

    

    let appRef=this;
    activeRegion.bind(childElement, "rotate", function (event) {
      //Perform Operations
      if(appRef.state.locked===true || appRef.state.childLevel===1 || appRef.state.childLevel===2)
      {
          return ;
      }
      this.angle=event.detail.angle;
      if (event.detail.distanceFromLast <= 0) {
        return;
      }
      //console.log(event.detail);
      let temIndex=(event.detail.distanceFromOrigin/15)%5;
      let ind;
      //console.log("diff =  ",appRef);
      if(0<=temIndex && temIndex<=1)
      {
        ind=0;
      }
      else if(1<=temIndex && temIndex<=2)
      {
        ind=1;
      }
      else if(2<=temIndex && temIndex<=3)
      {
        ind=2;
      }
      else{
        ind=3;
      }
     
      appRef.setState({
      homeMenuItemIndex:ind
     }, () => {
      console.log("updated index Home",appRef.state.homeMenuItemIndex);
     });

     
      
    });
  }

  forward = () => {
   // console.log("In forward");
    if(this.state.childLevel===0 || this.state.childLevel===2)
    {
      return ;
    }
    let tempInd=(this.state.subMenuItemIndex+1)%3;
    this.setState({
      subMenuItemIndex:tempInd
    });

  }

  backward = () => {
    //console.log("In backward");
    if(this.state.childLevel===0 || this.state.childLevel===2)
    {
      return ;
    }
    let tempInd=(this.state.subMenuItemIndex+3-1)%3;
    this.setState({
      subMenuItemIndex:tempInd
    });

  }

  playOrPause = () => {
   // console.log("In playOrPause",this.state.childLevel);
    if(this.state.childLevel===0 || this.state.childLevel===2)
    {
      return ;
    }
    this.setState({
      childLevel:this.state.childLevel+1
    })

  }

  unlock = () => {
    //console.log("in unlocked function ");
    this.setState({
      locked:false
    });
  }

  increaseChildLevel = () => {
    //console.log("In increaseChildLevel ");
    this.setState({
      childLevel: this.state.childLevel+1
    }, () => {
      console.log("updated index ",this.state.childLevel);
     });
  }

  menu = () => {
    //console.log("In menu ",this.state.childLevel);
    if(this.state.locked===true)
    {
      return ;
    }
    if(this.state.childLevel===0)
    {
      this.setState({
        locked: true,
        homeMenuItemIndex: 0,
        subMenuItemIndex: 0
      });
    }
    else
    {
      this.setState({
        childLevel: this.state.childLevel-1,
      });
    }
  }
  

  enter= (event) => {
    //console.log('clicked',event);
    if(this.state.locked===true)
    {
       this.unlock();
    }
    else if(this.state.childLevel===0)
    {
        this.increaseChildLevel();
    }
    else if(this.state.childLevel===1)
    {
        this.increaseChildLevel();
    }
  }

  render() {
    return (
      <div className="App">
        <Screen 
          locked ={this.state.locked}
          homeMenuItemIndex={this.state.homeMenuItemIndex}
          childLevel={this.state.childLevel}
          subMenuItemIndex={this.state.subMenuItemIndex}

        />
        <Buttons
           enter= {this.enter}
           forward={this.forward}
           backward={this.backward}
           playOrPause={this.playOrPause}
           menu={this.menu}
        />
      </div>
    );
  }
}

export default App;
