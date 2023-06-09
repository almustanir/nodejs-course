const {format} = require('date-fns');
const {v4: uuid} = require('uuid');

const fs = require('fs');
const fsPromises = require('fs/promises');
const path = require('path');

const logEvents = async (message) => {
    const dateTime = format(new Date(), 'yyyy-mm-dd\t\tHH:mm:ss');
    const logItems = `${dateTime}\t${uuid()}\t${message}`
    console.log(logItems);

    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fs.mkdir(path.join(__dirname, 'logs'), (err) => {
                if (err) throw err;
            })
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventsLog.txt'),
        logItems
        );
    } catch (error) {
        console.error(err);
        
    }
    
}

module.exports = logEvents;


