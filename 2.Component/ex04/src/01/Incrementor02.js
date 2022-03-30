import React, {useState} from 'react';

export default function ({begin, step}) {
    const [val, setVal] = useState(begin);
<<<<<<< HEAD

    return (
        <div>
            <button onClick={e => setVal(val+step)}>
=======
    console.log("!!!!!!!")
    return (
        <div>
            <button onClick={e => setVal(val + step)}>
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
                <strong>+</strong>
            </button>
            {' '}
            <span>{val}</span>
        </div>
    );
}