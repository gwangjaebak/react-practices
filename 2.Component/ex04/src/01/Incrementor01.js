import React, { Component } from 'react';

export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = {
<<<<<<< HEAD
=======
            step: this.props.step,
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
            val: this.props.begin
        }
    }

<<<<<<< HEAD
    onClickButton(e) {
       this.setState({
           val: this.state.val + this.props.step
=======
    onClickButton(e){
        this.setState({
            val: this.state.val + this.state.step
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickButton.bind(this)}>
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.val}</span>
            </div>
        );
    }
}