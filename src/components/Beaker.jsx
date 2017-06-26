import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
// TODO: Use absolute path
import styles from '../styles/Beaker.css';
import BeakerLiquid from './BeakerLiquid.jsx';
import BeakerBubbleFactory from './BeakerBubbleFactory.jsx';
import BeakerGraphic from './BeakerGraphic.jsx';

class Beaker extends Component {
  render() {
    const {
      width,
      height,
      percentFilled,
      bubbleOptions
    } = this.props;

    const inlineStyle = {
      'width': `${width}px`,
      'height': `${height}px`
    };

    return (
      <div style={inlineStyle} className={styles.wrapper}>
        <BeakerGraphic/>
        <BeakerLiquid percentFilled={percentFilled}/>
        <BeakerBubbleFactory
          bubbleOptions={bubbleOptions}
          percentHeight={percentFilled}
          spawnFrequency={500}
        />
      </div>
    );
  }
}

Beaker.defaultProps = {
  width: 150,
  height: 150,
  bubbleOptions: {
    radius: 100
  }
};

Beaker.propTypes = {
  percentFilled: PropTypes.number.isRequired,
  // TODO: Define shape
  bubbleOptions: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number
};


export default Beaker;