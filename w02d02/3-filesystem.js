// https://nodejs.org/docs/latest-v14.x/api/fs.html#fs_fs_readfile_path_options_callback
const { readFile } = require('fs');

const handleDataCallback = (err, data) => {
  if (err) throw err;
  console.log(data);
};

readFile('./data.txt', 'utf-8', handleDataCallback);
