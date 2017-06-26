import React, {Component, PropTypes} from 'react'; // eslint-disable-line
import Bubble from './BeakerBubble.jsx';
import styles from '../styles/BeakerBubbleFactory.css';

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
      bubbles: this.state.bubble.slice(1)
    });
  }
  spawnBubble() {
    const bubble = (
      <Bubble
        onPop={this.onBubblePop}
        duration={5000}
        initialXPos={this.getRandSpawnPosition()}
        radius={5}
      />
    );
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
  percentHeight: PropTypes.number.isRequired
};

export default BeakerBubbleFactory;