import util from 'util';
import bal from 'proxy-bal';
import ops from '../../config/service.ops.config.json';
import config from '../../project.config.json';

import { BusServiceConstructor, IMediaAnalyticsService } from './ServiceInterface';

import operations from './operations/index';

const Service: IMediaAnalyticsService = function(access: bal.createAccess, options: any) {
    return Service.super_.call(this,
        access,
        {
            serviceType: config.identity.serviceName,
            description: config.identity.description,
            serviceRealm: config.identity.realm,
            serviceVersion: config.identity.version,
            ops: ops,
        },
        options);
};

util.inherits(Service, bal.Service);

export default function(access: bal.createAccess, options: any) {
    return new (<BusServiceConstructor>Service)(access, options);
};

Service.prototype.getSupportedTypes = operations.getSupportedTypes;
Service.prototype.startJob = operations.startJob;
Service.prototype.getJob = operations.getJob;
Service.prototype.delete = operations.delete;
Service.prototype.search = operations.search;
Service.prototype.cancel = operations.cancel;
Service.prototype.getResult = operations.getResult;
Service.prototype.getResultForType = operations.getResultForType;
