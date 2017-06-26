import React from 'react'; // eslint-disable-line no-unused-vars
import styles from '../styles/Range.css';

/**
* @this DemoApp
*/
const Range = ({
  name,
  label,
  min,
  max,
  value,
  onChange
}) => {
  const rangeProps = {
    name,
    type: 'range',
    min,
    max,
    defaultValue: value,
    className: styles.demoRange,
    onChange
  };

  return (
    <fieldset className={styles.rangeFieldset}>
      <legend className={styles.rangeLegend}>{label}</legend>
      <input {...rangeProps}/>
    </fieldset>
  );
}

// TODO: PropTypes for Range

export default Range;