import { CTMSResource, commonObject} from '../CTMS/ctmsInterfaces'

export type jobStateType = 'undefined' | 'pending' | 'uploading' | 'uploaded' | 'processing' | 'finished' | 'error' | 'canceled';

type layer = {
    name: string;
    segments: Array<segment>;
};

type segment = {
    id: string;
    start: number;
    duration: number;
    attributes: [{
        name: string;
        value: string;
    }];
};

export type Sentiment = {
    editRate: string,
    dropFrame: boolean,
    layers: Array<layer>;
};

export type JobResult = {
    type: string;
    dataType: CTMSResource;
    data: Sentiment | commonObject;
};

export type Job = {
    id: string;
    state: jobStateType;
    message: string | null;
    error: string;
    progress: number;
};
