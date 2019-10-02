import React from 'react';
import Child from './Child';

/*
class Parent extends React.Component {
    constructor(props) {
        super(props);

    }
    handleChildClick(childData,event) {
        alert("The Child button data is: " + childData.childText + " - " + childData.childNumber);
        alert("The Child HTML is: " + event.target.outerHTML);
    }
    render() {
        return (
            <div>
                {this.props.childrenData.map(child => (
                    <Child key={child.childNumber} text={child.childText} onClick={e => this.handleChildClick(child,e)} />
                ))}
            </div>
        );
    }
}
*/

class Parent extends React.Component {
    constructor(props){
        super(props);
        //this.cnslg = this.cnslg.bind(this);
    }
    render() {
        return (
            <div>
                <Child onClick={this.handleChildClick} text={this.state.childText} />
                <button onClick={this.cnslg}>parent</button>
            </div>
        )
    }
    cnslg = () => {
        console.log(this.props);
        console.log(this.state);
    }
    handleChildClick = (event) => {
            // You can access the prop you pass to the children because you already have it! Here you have it in state but it could also bein props, coming from another parent.
            alert("The Child button text is: " + this.state.childText);
            // You can also access the target of the click here if you want to do some magic stuff
            alert("The Child HTML is: " + event.target.outerHTML);
    }
}



/*
var Parent = React.createClass({
    getInitialState: function() {
        return {childText: "Click me! (parent prop)"};
    },
    render: function () {
        return (
            <Child onClick={this.handleChildClick} text={this.state.childText}/>
        );
    },
    handleChildClick: function(event) {
       // You can access the prop you pass to the children because you already have it! Here you have it in state but it could also bein props, coming from another parent.
       alert("The Child button text is: " + this.state.childText);
       // You can also access the target of the click here if you want to do some magic stuff
       alert("The Child HTML is: " + event.target.outerHTML);
    }
});
*/
export default Parent;