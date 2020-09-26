const {
  prompt,
  Confirm,
  Input,
  Snippet,
  Scale,
  Survey,
  Quiz,
  AutoComplete,
  BasicAuth,
  Toggle,
  Select,
} = require('enquirer');
// live-plugin-manager AS ALTERNATIVE
// const {exec, execSync, spawn} = require('child_process');
// const util = require('util');
// const exec = util.promisify(require('child_process').exec);
const {execSync} = require('child_process');
const {name} = require('./app.json');

(async () => {
  // await exec('brew tap jondot/tap');
  // await exec('brew install hygen');

  execSync('git init', {stdio: 'inherit'});

  execSync(
    'npm i --save-dev @types/lodash babel-plugin-module-resolver @commitlint/config-conventional @commitlint/cli @types/react-native-vector-icons',
    {stdio: 'inherit'},
  );

  execSync(
    'npm i -s axios lodash react-native-modal react-native-modal-translucent @react-native-community/async-storage i18next react-i18next react-native-vector-icons @react-navigation/native @react-navigation/stack react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view react-native-fast-image',
    {stdio: 'inherit'},
  );

  execSync('HYGEN_OVERWRITE=1 hygen setup _init', {stdio: 'inherit'});

  execSync(`hygen setup _native --appName ${name}`, {stdio: 'inherit'});

  // SELECT
  const select = await new Select({
    name: 'store',
    message: 'Select store',
    choices: ['redux', 'reactn', 'none'],
  }).run();

  if (select === 'redux') {
    console.log('Redux Installation...');
    execSync('npm i --save-dev redux-devtools-extension @types/react-redux', {
      stdio: 'inherit',
    });
    execSync('npm i -s redux redux-saga react-redux redux-persist', {
      stdio: 'inherit',
    });
  } else if (select === 'reactn') {
    console.log('Reactn Installation...');
    execSync('npm i --save-dev reactn-devtools', {
      stdio: 'inherit',
    });
    execSync('npm i -s reactn reactn-persist', {
      stdio: 'inherit',
    });
  }
  execSync(`hygen setup ${select}`, {stdio: 'inherit'});

  const toggle = await new Toggle({
    message: 'Do you need sentry?',
    enabled: 'Yes',
    disabled: 'No',
  }).run();

  console.log(toggle, 'TOGGLE');

  if (toggle) {
    execSync('npm install --save @sentry/react-native', {stdio: 'inherit'});
    execSync('hygen setup sentry', {stdio: 'inherit'});
  }

  // @sentry/react-native

  // <!--------------------->

  // execSync('npm run watchman', {stdio: 'inherit'});

  // PROMPT
  // const {name, bundleName} = await prompt([
  //   {
  //     type: 'input',
  //     name: 'name',
  //     message: 'App Display Name:',
  //   },
  //   {
  //     type: 'input',
  //     name: 'bundleName',
  //     message: 'App Bundle Identifier:',
  //   },
  // ]);

  // TRUE OR FALSE
  // const confir = await new Confirm({
  //   name: 'question',
  //   message: 'Did you like enquirer?',
  // }).run();

  // INPUT
  // const prom = await new Input({
  //   name: 'username',
  //   message: 'What is your username?',
  //   initial: 'jonschlinkert', // AUTO HELPER
  // }).run();

  // AUTOCOMPLETE
  // const autocomplete = await new AutoComplete({
  //   name: 'flavor',
  //   message: 'Pick your favorite flavor',
  //   limit: 10,
  //   initial: 2,
  //   choices: [
  //     'Almond',
  //     'Apple',
  //     'Banana',
  //     'Blackberry',
  //     'Blueberry',
  //     'Cherry',
  //     'Chocolate',
  //     'Cinnamon',
  //     'Coconut',
  //     'Cranberry',
  //     'Grape',
  //     'Nougat',
  //     'Orange',
  //     'Pear',
  //     'Pineapple',
  //     'Raspberry',
  //     'Strawberry',
  //     'Vanilla',
  //     'Watermelon',
  //     'Wintergreen',
  //   ],
  // }).run();

  // BASIC AUTH
  // const bAuth = await new BasicAuth({
  //   name: 'password',
  //   message: 'Please enter your password',
  //   username: 'someee',
  //   password: '123',
  //   showPassword: true,
  // }).run();

  // QUIZ
  // const quiz = await new Quiz({
  //   name: 'countries',
  //   message: 'How many countries are there in the world?',
  //   choices: ['165', '175', '185', '195', '205'],
  //   correctChoice: 3,
  // }).run();

  // SURVEY
  // const surv = await new Survey({
  //   name: 'experience',
  //   message: 'Please rate your experience',
  //   scale: [
  //     {name: '1', message: 'Strongly Disagree'},
  //     {name: '2', message: 'Disagree'},
  //     {name: '3', message: 'Neutral'},
  //     {name: '4', message: 'Agree'},
  //     {name: '5', message: 'Strongly Agree'},
  //   ],
  //   margin: [0, 0, 0, 0],
  //   choices: [
  //     {
  //       name: 'interface',
  //       message: 'The website has a friendly interface.',
  //     },
  //     {
  //       name: 'navigation',
  //       message: 'The website is easy to navigate.',
  //     },
  //     {
  //       name: 'images',
  //       message: 'The website usually has good images.',
  //     },
  //     {
  //       name: 'upload',
  //       message: 'The website makes it easy to upload images.',
  //     },
  //     {
  //       name: 'colors',
  //       message: 'The website has a pleasing color palette.',
  //     },
  //   ],
  // }).run();

  // SCALE
  // const scal = await new Scale({
  //   name: 'experience',
  //   message: 'Please rate your experience',
  //   scale: [
  //     {name: '1', message: 'Strongly Disagree'},
  //     {name: '2', message: 'Disagree'},
  //     {name: '3', message: 'Neutral'},
  //     {name: '4', message: 'Agree'},
  //     {name: '5', message: 'Strongly Agree'},
  //   ],
  //   margin: [0, 0, 2, 1],
  //   choices: [
  //     {
  //       name: 'interface',
  //       message: 'The website has a friendly interface.',
  //       initial: 2,
  //     },
  //     {
  //       name: 'navigation',
  //       message: 'The website is easy to navigate.',
  //       initial: 2,
  //     },
  //     {
  //       name: 'images',
  //       message: 'The website usually has good images.',
  //       initial: 2,
  //     },
  //     {
  //       name: 'upload',
  //       message: 'The website makes it easy to upload images.',
  //       initial: 2,
  //     },
  //     {
  //       name: 'colors',
  //       message: 'The website has a pleasing color palette.',
  //       initial: 2,
  //     },
  //   ],
  // }).run();

  // SNIPPET
  // const snip = await new Snippet({
  //   name: 'username',
  //   message: 'Fill out the fields in package.json',
  //   required: true,
  //   fields: [
  //     {
  //       name: 'author_name',
  //       message: 'Author Name',
  //     },
  //     {
  //       name: 'version',
  //       message: 'Version value',
  //     },
  //   ],
  //   template: `{
  //   "name": "\${name}",
  //   "description": "\${description}",
  //   "version": "\${version}",
  //   "homepage": "https://github.com/\${username}/\${name}",
  //   "author": "\${author_name} (https://github.com/\${username})",
  //   "repository": "\${username}/\${name}",
  //   "license": "\${license:ISC}"
  // }
  // `,
  // }).run();

  // TOGGLE   -------------------> GOOD CHOICE FOR ONE OF TWO
  // const togl = await new Toggle({
  //   message: 'Want to answer?',
  //   enabled: 'Redux Saga',
  //   disabled: 'Reactn',
  // }).run();

  // SELECT
  // const select = await new Select({
  //   name: 'color',
  //   message: 'Pick a flavor',
  //   choices: ['apple', 'grape', 'watermelon', 'cherry', 'orange'],
  // }).run();

  // TRY WITH PROMPT TOGGLE  ---------> WORKS FINE
  // const {togled} = await prompt([
  //   {
  //     type: 'toggle',
  //     name: 'togled',
  //     message: 'Which reducer to use? ',
  //     enabled: 'Redux Saga',
  //     disabled: 'Reactn',
  //   },
  // ]);

  // console.log(name, '---> name');
  // console.log(bundleName, '---> bundleName');
  // console.log(confir, '---> confir');
  // console.log(prom, '---> prom');
  // console.log(autocomplete, '---> autocomplete');
  // console.log(bAuth, '---> bAuth');
  // console.log(quiz, '---> quiz');
  // console.log(surv, '---> surv');
  // console.log(scal, '---> scal');
  // console.log(select, '---> select');
  // console.log(snip, '---> snip');
  // console.log(togl, '---> togl');
  // console.log(togled, '---> togled');
  console.log('Installation finished!');
})();
