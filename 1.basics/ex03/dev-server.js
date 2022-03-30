import http from 'http';
import * as path from 'path';
import express from 'express';

const port = 9090;
const application = express().use(express.static(path.join(path.resolve('.'), 'public')));

http
    .createServer(application)
    .on('listening', function(){
<<<<<<< HEAD
=======
        // console.info('http server runs on ' + port);
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
        console.info(`http server runs on ${port }`);
    })
    .listen(port);