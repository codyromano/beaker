import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import styles from '../styles/BeakerLiquid.css';

const BeakerLiquid = ({
  percentFilled
}) => {
  const inlineStyle = {
    'height': `${percentFilled}%`
  };

  return (
    <div style={inlineStyle} className={styles.fillWrapper}>
      <div className={styles.fill}></div>
    </div>
  );
};

BeakerLiquid.propTypes = {
  percentFilled: PropTypes.number.isRequired
};

export default BeakerLiquid;