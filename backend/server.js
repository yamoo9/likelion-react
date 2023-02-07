import liveServer from 'live-server';
import { resolve } from 'node:path';
import { argv } from 'node:process';
import parseArgv from './parseArgv.js';

/* directories -------------------------------------------------------------- */

const frontendDir = resolve('frontend');

const DIR = {
  public: resolve(frontendDir, 'public'),
  src: resolve(frontendDir, 'src'),
};

/* parameters --------------------------------------------------------------- */

let params = {
  host: 'localhost',
  port: 3000,
  root: DIR.public,
  file: 'index.html',
  mount: [['/scripts', DIR.src]],
  open: false,
  wait: 200,
};

const customParams = parseArgv(argv);

params = { ...params, ...customParams };

/* start server ------------------------------------------------------------- */

liveServer.start({ ...params, ...customParams });
