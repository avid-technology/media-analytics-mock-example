import path from 'path';
import os from'os';
import log4js from 'log4js';
import fs from 'fs-extra';
const logger = require.main.require('log4js').getLogger(`cloudux-starter-kit-service ${__filename}`);

export default function log4JsConfiguration() {
    if (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.includes('production')) {
        try {
            let configForLogs = require('./log4jsConfigOnlyLogs').default;
            log4js.configure(configForLogs);
        } catch (err) {
            console.log(`Can't run logger`);
        }
    } else {
        try {
            let config = require('./log4jsConfig').default;
            log4js.configure(config);
        } catch (err) {
            let configForLogs = require('./log4jsConfigOnlyLogs').default;
            log4js.configure(configForLogs);
            logger.debug(`Can't save logs`)
        }
    }
    logger.trace(`--------------------------------- Using CloudUx starter kit service ---------------------------------`);
    logger.trace(`System information: `, os.type(), ` `, os.release(), ` `, os.platform(), ` Node Information: `, process.versions);
}
