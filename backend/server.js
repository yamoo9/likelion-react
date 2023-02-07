import liveServer from 'live-server';
import { resolve } from 'node:path';
import { argv } from 'node:process';

/* directories -------------------------------------------------------------- */

const frontendDir = resolve('./', 'frontend');
const publicDir = resolve(frontendDir, 'public');
const srcDir = resolve(frontendDir, 'src');

/* parameters --------------------------------------------------------------- */

let params = {
  host: 'localhost',
  port: 3000,
  root: publicDir,
  file: 'index.html',
  mount: [['/scripts', srcDir]],
  open: false,
  wait: 200,
};

const customParams = parseArgv(argv);

params = { ...params, ...customParams };

/* start server ------------------------------------------------------------- */

liveServer.start({ ...params, ...customParams });

/* utils -------------------------------------------------------------------- */

function parseArgv(argv) {
  return argv.slice(2).reduce((params, currentParam) => {
    let [key, value] = currentParam.split('=');
    key = [key.replace(/--/, '')];
    currentParam = { [key]: value ?? true };
    return { ...params, ...currentParam };
  }, {});
}
