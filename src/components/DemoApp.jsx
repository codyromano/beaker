import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
// TODO: Use absolute path
//import styles from '../styles/Beaker.css';
import Beaker from './Beaker.jsx';

class DemoApp extends Component {
  render() {
    return (
      <div>
        <Beaker percentFilled={50} width={150} height={150}/>
      </div>
    );
  }
}

export default DemoApp;