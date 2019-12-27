import React from 'react';

class RouletteGun extends React.Component{
    state = {
        chamber: null,
        spinningTheChamber: false
    }

render() {
    return (
    <div> 
        <p>Test</p>
        <button>Pull the trigger!</button>
    </div>
    )}

    static defaultProps = {
        bulletInChamber: 8
    }
}

export default RouletteGun;