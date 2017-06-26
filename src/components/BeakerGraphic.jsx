import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
// TODO: Use absolute path
import beakerImage from '../styles/images/base.png';
import styles from '../styles/BeakerGraphic.css';

const BeakerImage = () => (
  <img src={beakerImage} className={styles.graphic}/>
);

export default BeakerImage;