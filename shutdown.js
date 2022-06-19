// After crashes, Firebase Emulators keeps ports open and can't restart.
const exec = require('child_process').exec;
exec('kill-port 9099 && kill-port 5001 && kill-port 8080 && kill-port 9000 && kill-port 5000 && kill-port 9199 && kill-port 4000');