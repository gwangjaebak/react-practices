import React from 'react'
import MyComponent from './MyComponent';

const App = function() {
  return (
    <div id="App">
<<<<<<< HEAD
      <MyComponent
        /* props01={'문자열'} */
        props02={100}
        props03={true}
        props04={{no:1}}
        props05={[1, 2, 3, 4]}
        props06={() => '함수'}
        props07={200} 
        props08={[false, false, true]}
        props09={{no: 1, name: '둘리', email: 'dooly@gmail.com'}}/>
=======
        <MyComponent 
          // props01={'문자열'}
          // props02={100}/>
          props03={true}/>
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
    </div>
  )
}

export default App