export const getDemoFormFields = () => [
  {
    'name': 'percentFilled',
    'component': 'Range',
    'label': 'Percent Complete',
    'value': 50,
    'min': 0,
    'max': 100
  },
  {
    'name': 'size',
    'component': 'Range',
    'label': 'Size',
    'value': 250,
    'min': 10,
    'max': 400
  },
  {
    'name': 'spawnFrequency',
    'component': 'Range',
    'label': 'Time between bubbles',
    'value': 500,
    'min': 250,
    'max': 5000
  },
  {
    'name': 'bubbleRadius',
    'component': 'Range',
    'label': 'Bubble Radius',
    'value': 20,
    'min': 1,
    'max': 50
  }
].map((item, i) => {
  item.key = i;
  
  // Note: all values are numeric now, but this may change
  // in the future, in which case an extendable transformer
  // would be a better approach.
  item.value = parseInt(item.value);

  return item;
});