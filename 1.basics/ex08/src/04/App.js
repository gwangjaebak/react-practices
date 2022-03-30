import React, {Fragment} from 'react';

import Header from './Header';
import Content from './Content';

const App = function() {
    // return (
    //     <Fragment>
    //         <Header />
    //         <Content />
    //     </Fragment>    
    // );

    return React.createElement(
        Fragment,
        null,
        React.createElement(Header, null),
<<<<<<< HEAD
        React.createElement(Content, null)
    );
=======
        React.createElement(Content, null),
    )
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
}

export default App;