import React from 'react'
<<<<<<< HEAD
import React from 'react'

const App = () => {
  
  return (
    <div>
        <h1
            onClick={ e => console.log('click!') }
            style={{
                cursor: 'pointer'
            }}>
                ex03: InlineHandler
=======

const App = () => {
  return (
    <div>
        <h1
            onClick={ e => { console.log('click!'); }}
            style={{
                cursor: 'pointer'
            }}>
                ex03: Inline Handler
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
        </h1>
    </div>
  )
}

<<<<<<< HEAD
export default App;

=======
export default App
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
