import getSupportedTypes from './getSupportedTypes';
import startJob from './startJob';
import getJob from './getJob';
import deleteOperation from './delete';
import search from './search';
import cancel from './cancel';
import getResult from './getResult/getResult';
import getResultForType from './getResultForType';

import { MediaAnalyticsService } from '../ServiceInterface';

const operations: MediaAnalyticsService = {
    getSupportedTypes,
    startJob,
    getJob,
    delete: deleteOperation,
    search,
    cancel,
    getResult,
    getResultForType
};

export default operations;
