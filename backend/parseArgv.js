function parseArgv(argv) {
  return argv.slice(2).reduce((params, currentParam) => {
    let [key, value] = currentParam.split('=');
    key = [key.replace(/--/, '')];
    currentParam = { [key]: value ?? true };
    return { ...params, ...currentParam };
  }, {});
}

export default parseArgv;
