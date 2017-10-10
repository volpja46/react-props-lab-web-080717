import React from 'react';
import ReactDOM from 'react-dom';

export default class Spaceship extends React.Component {
render(){
  const { name, speed, hasRockets, colors } = this.props;

  return (
    <div>
    <h1>{this.props.name}</h1>
    <p>{this.props.speed}</p>
    <p>{this.hasRockets}</p>
    <p>{this.props.colors}</p>
    </div>

   )
 }
};

Spaceship.defaultProps = {
speed: 'slow',
hasRockets: false,
colors: `Colors: ['black', 'red']`
}
// OR declare your component first, and then:
