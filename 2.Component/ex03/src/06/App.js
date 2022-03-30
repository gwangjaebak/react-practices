import React, { Component } from 'react';
import './assets/scss/App.scss';

export default class App extends Component {
<<<<<<< HEAD
    onScroll(e) {
        console.log(this.outterRef.clientHeight, ':', this.outterRef.scrollTop, ':', this.innerRef.clientHeight);
    }

    render() {
        return (
            <div
                ref={ref => this.outterRef = ref}
                className={'App'}
                onScroll={this.onScroll.bind(this)}>
                <div
                    ref={ref => this.innerRef = ref}>
                    <ul>
                    {
                        Array.from({length: 100}, (_, i) => i+1).map(e => 
                            <li key={e}>
                                {`아이템 ${e} 입니다.`}
                            </li>)
                    }
                    </ul>
                </div>
            </div>
        );
    }
=======
  onScroll(e) {
    console.log(this.outterRef.clientHeight, ":", this.outterRef.scrollTop, ":", this.innerRef.clientHeight);
  }

  render() {
      return (
          <div
              ref={ref => this.outterRef = ref}
              className={'App'}
              onScroll={this.onScroll.bind(this)}>
              <div
                  ref={ref => this.innerRef = ref }>
                  <ul>
                    { 
                      Array.from({length: 100}, (_, i) => i+1).map(e => 
                        <li key={e}>
                          { `아이템 ${e} 입니다.` }
                        </li>)
                    }
                  </ul>
              </div>
          </div>
      );
  }
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
}