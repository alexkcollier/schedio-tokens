const ase = require('ase-utils');
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');

const dist = path.resolve(__dirname, '../dist/adobe/');
const props = require(path.join(dist, 'color.ase.json'));
const propsBuffer = Buffer.from(ase.encode(props), 'utf8');

fs.outputFile(path.join(dist, 'colors.ase'), propsBuffer)
  .then(() => console.log(chalk.green('ASE swatches written')))
  .catch(e => console.log(chalk.red(e)));
