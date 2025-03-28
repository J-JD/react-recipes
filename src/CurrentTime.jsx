import React from 'react';

function CurrentTime() {
    const date = new Date();
    const time = date.toLocaleTimeString();
    return(
        <div>
            <h3>Current time</h3>
            <p>{ time }</p>
        </div>
    )
};

export default CurrentTime;