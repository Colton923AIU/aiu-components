const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css'],
    alias: {
      'ControlStrings': path.resolve(__dirname, 'src/form/controlled/PeoplePicker/ControlStrings.ts'),
      '@styles': path.resolve(__dirname, 'src/styles')
    }
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    '@microsoft/sp-core-library': '@microsoft/sp-core-library',
    '@microsoft/sp-http': '@microsoft/sp-http',
    '@microsoft/sp-page-context': '@microsoft/sp-page-context',
    '@pnp/spfx-controls-react': '@pnp/spfx-controls-react',
    '@ms/odsp-core-bundle': '@ms/odsp-core-bundle',
    '@azure/msal-browser': '@azure/msal-browser'

  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                includePaths: [
                  path.resolve(__dirname, 'src/styles'),
                  path.resolve(__dirname, 'node_modules')
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.resx$/,
        type: 'asset/source'
      }
    ]
  }
}; 