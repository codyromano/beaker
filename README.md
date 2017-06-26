# beaker  
Beaker is a React UI component designed for online experiments. Use it to visually represent a user's progress as he or she participates in research such as a survey or usability study.

![](https://media.giphy.com/media/3og0IEgKTLotGnYWY0/giphy.gif)

## Dependencies

Beaker relies on these tools:

- node & npm
- Webpack
- React & JSX

## Usage & Customization

Simply `import` the `Beaker` component. You can customize it in the following ways:

| Prop           | Type                  | Required | Default       |
|----------------|-----------------------|----------|---------------|
| width          | Number (pixels)       | No       | 150           |
| height         | Number (pixels)       | No       | 150           |
| spawnFrequency | Number (milliseconds) | No       | 250           |
| percentFilled  | Number (0 - 100)      | Yes      | None          |
| bubbleOptions  | Object                | No       | {radius: 100} |


## Try the Demo

You can run the following commands to see what's featured in the .gif above. First, ensure that `node`, `npm` and `webpack` are globally installed on your machine:
```
git clone https://github.com/codyromano/beaker.git
cd beaker
npm install
webpack
open src/public/index.html
```

## Next steps / Backlog

- Use Webpack aliases instead of relative paths for ES6 module imports
- Implement a SASS loader on top of CSS modules
- Refactor some of the larger React files into stateless functional components
- Make it easier to import `Beaker` from third-party packages (i.e. updating paths / Node config)

## Contributing

Please feel welcome to send me a pull request! Contributions are much appreciated because I can't invest a lot of time in keeping up this package.
