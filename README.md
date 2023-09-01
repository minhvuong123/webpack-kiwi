1. Set up babel
  install @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript -D
  => and create babelrc file

2. install React package
  install react react-dom
  install @types/react @types/react-dom -D

3. install typescript
  install typescript -D

3. install webpack
  install webpack webpack-cli
  => create webpack.config.js file
  babel-loader => to run .ts, .tsx, ... file
  style-loader css-loader => for css file
  html-webpack-plugin => to run html file
  type: "asset/resource" => to add jpg, png, .. file
  type: "asset/inline" => to add svg, font(eot, tff,) file  ...

4. install @pmmmwh/react-refresh-webpack-plugin react-refresh -D
  Note: support to refresh of react's component. Its mean to keeping the data after we change anything in react's component and save
  => ususally set up for development 

5. Can move --open in package.json of development mode to devServer of webpack.dev.js

6. Eslint
  install eslint for vscode
  install eslint -D
  install eslint-plugin-react eslint-plugin-react-hooks -D
  install @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
  install eslint-plugin-import eslint-plugin-jsx-a11y -D
  add "lint": "eslint --fix \"./src/**/*.{js,jsx,ts,tsx,json}\"",

7. Prettier
  install prettier - code formatter for vscode
  install prettier eslint-config-prettier eslint-plugin-prettier -D
  "format": "prettier --write \"./src/**/*{js,jsx,ts,tsx,json,css,scss,md}\""

8. husky
  install husky@4 lint-staged -D

9. babel/runtime
  install @babel/runtime @babel/plugin-transform-runtime -D
  => update babelrc file

10. copy-webpack-plugin
  install -D copy-webpack-plugin
  => update plugin in webpack.common.js
  => copy directory to build folder

11. webpack-bundle-analyzer
  install -D yarn add -D webpack-bundle-analyzer
  => update plugin in webpack.prod.js
  => run comment: yarn build
 
