
import './Buttons.css';
import React from 'react';

export default class Buttons extends React.Component{


   

    render() {
        return (
            <div className='buttons-container'>
                <div id="outer-circle">
                    <div id='options'>
                        <div className='menu' onClick={this.props.menu}>
                            MENU
                        </div>
                        <div className='forward' onClick={this.props.forward}>
                            <img className='image-button' src='https://cdn-icons-png.flaticon.com/128/4210/4210646.png' alt='forward'></img>
                        </div>
                        <div className='backward' onClick={this.props.backward}>
                            <img className='image-button' src='https://cdn-icons-png.flaticon.com/128/6051/6051267.png' alt='backward'></img>
                        </div>
                        <div className='play-pause' onClick={this.props.playOrPause}>
                            <img className='image-button' src='https://t4.ftcdn.net/jpg/05/34/18/59/240_F_534185930_hhLcpdKr4AqUdjAhNX63ayYTqhFcaouF.jpg' alt='play-pause'></img>
                        </div>
                    </div>

                    <div className="inner-circle" onClick={this.props.enter}>
                        <p>OK</p>
                    </div>
                </div>
            </div>
        )
    }
}