import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
// TODO: Use Webpack aliases
import styles from '../styles/DemoApp.css';
import Beaker from './Beaker.jsx';
import Range from './Range.jsx';
import {getDemoFormFields} from '../definitions/demoFormFields';

class DemoApp extends Component {
  constructor() {
    super();

    this.state = {fields: getDemoFormFields()};
    this.demoInputChanged = this.demoInputChanged.bind(this);
    this.renderField = this.renderField.bind(this);
  }

  getFieldByName(name) {
    for (const definition of this.state.fields) {
      if (definition.name === name) {
        return definition;
      }
    }
    return null;
  }

  getFieldValue(name) {
    const def = this.getFieldByName(name);
    return def && def.value || null;
  }

  setFieldValue(name, newValue) {
    const def = this.getFieldByName(name);
    if (def) {
      def.value = newValue;
      return true;
    }
    return false;
  }

  demoInputChanged(event) {
    const {name, value} = event.target;
    this.setFieldValue(name, parseFloat(value));
    this.forceUpdate();
  }

  renderField(definition) {
    let Component;

    switch (definition.component) {
    case 'Range':
      Component = Range;
      break;
    default:
        // Handle other component types if need arises
      break;
    }

    const onChange = this.demoInputChanged;
    Object.assign(definition, {onChange});

    return (
      <Component {...definition}/>
    );
  }

  renderFields() {
    return this.state.fields.map(this.renderField);
  }

  render() {
    const spawnFrequency = this.getFieldValue('spawnFrequency');
    const size = this.getFieldValue('size');
    const percentFilled = this.getFieldValue('percentFilled');

    const beakerProps = {
      percentFilled,
      spawnFrequency,
      width: size,
      height: size,
      bubbleOptions: {
        radius: this.getFieldValue('bubbleRadius')
      }
    };

    return (
      <div className={styles.demoApp}>
        <div className={styles.beakerWrapper}>
          <Beaker {...beakerProps}/>
        </div>
        <form className={styles.settings}>
          {this.renderFields()}
        </form>
      </div>
    );
  }
}

export default DemoApp;