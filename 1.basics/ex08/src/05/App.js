<<<<<<< HEAD
import React, {Fragment, Component} from 'react';
=======
import React, { Fragment, Component } from 'react';
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb

import Header from './Header';
import Content from './Content';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Content />
            </Fragment>    
        );
    }
}

export default App;