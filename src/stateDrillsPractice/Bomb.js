import React from 'react';

class Bomb extends React.Component {
state = {
    bombSound: "tick",
    count: 0
}

componentWillMount(){
    this.interval = setInterval(() =>
    {
        const newCount = this.state.count += 1;
        if (newCount % 2 === 0){
            this.state.bombSound = "tick";
        }
        if (newCount % 2 !== 0){
            this.state.bombSound = "tock";
        }
        if (newCount >= 8){
            this.state.bombSound = "BOOM!!!!";
            clearInterval(this.interval);
        }
        this.setState({bombSound: this.state.bombSound})
        
    }, 1000)
}

    render() {
        return (
            <div> 
                <p>{this.state.bombSound}</p>
            </div>
        )
    }
}

export default Bomb;

