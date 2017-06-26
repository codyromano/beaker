import React from 'react'; // eslint-disable-line no-unused-vars
import Beaker from './components/Beaker.jsx';
import {render} from 'react-dom';

render((
  <Beaker width={250} height={250} percentFilled={50}/>
), document.getElementById('react-root'));
