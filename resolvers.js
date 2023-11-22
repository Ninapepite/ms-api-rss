const cron = require('node-cron');
const shell = require('shelljs');


const createCron = async (cronTime, argsBash) => {

    cron.schedule(cronTime, () => {
        shell.exec('./rssFeed.sh' + argsBash);
    });
    return true;
}