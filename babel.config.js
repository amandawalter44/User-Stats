module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript', // Only if using TypeScript
  ],
  plugins: ['babel-plugin-relay'], // Add Relay Babel plugin
};
