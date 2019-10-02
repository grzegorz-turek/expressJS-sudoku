import React from 'react';

//const Child = ({onClick, text}) => (<button onClick={onClick}>{text}</button>)

class Child extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={this.props.onClick}>{this.props.text}</button>
        )
    }
    
    onClk() {
        console.log('inner: ' + this.props)
    }
}
//console.log(this.props);
/*
var Child = React.createClass({
    render: function () {
        return <button onClick={this.props.onClick}>{this.props.text}</button>;
    },
});
*/

export default Child;