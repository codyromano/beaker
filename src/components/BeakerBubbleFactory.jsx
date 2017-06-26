import React, {Component, PropTypes} from 'react'; // eslint-disable-line
import Bubble from './BeakerBubble.jsx';
import styles from '../styles/BeakerBubbleFactory.css';

const getBubbleId = (function() {
  let id = 1;
  return () => id++;
})();

class BeakerBubbleFactory extends Component {
  constructor() {
    super();
    this.state = {
      bubbles: []
    };
    this.onBubblePop = this.onBubblePop.bind(this);
  }
  componentDidMount() {
    window.setInterval(() => this.spawnBubble(),
      this.props.spawnFrequency);
  }
  onBubblePop() {
    this.setState({
      bubbles: this.state.bubbles.slice(1)
    });
  }
  spawnBubble() {
    const options = Object.assign({
      key: getBubbleId(),
      onPop: this.onBubblePop,
      duration: 5000,
      initialXPos: this.getRandSpawnPosition(),
      radius: 5
    }, this.props.bubbleOptions);

    const bubble = (<Bubble {...options}/>);
    this.setState({
      bubbles: this.state.bubbles.concat(bubble)
    });
  }
  getRandSpawnPosition() {
    return Math.round(50 + (Math.random() * 100));
  }
  render() {
    const inlineStyle = {
      height: `${this.props.percentHeight}%`
    };

    return (
      <div style={inlineStyle} className={styles.factory}>
        {this.state.bubbles}
      </div>
    );
  }
}

BeakerBubbleFactory.defaultProps = {
  spawnFrequency: 250
};

BeakerBubbleFactory.propTypes = {
  spawnFrequency: PropTypes.number,
  percentHeight: PropTypes.number.isRequired,
  bubbleOptions: PropTypes.object.isRequired
};

export default BeakerBubbleFactory;