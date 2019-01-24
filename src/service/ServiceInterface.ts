import bal from 'proxy-bal';
import { IUpstreamMethod } from './UpstreamInterfaces';

export type MediaAnalyticsService = {
    getSupportedTypes: IUpstreamMethod;
    startJob: IUpstreamMethod;
    getJob: IUpstreamMethod;
    getResult: IUpstreamMethod;
    getResultForType: IUpstreamMethod;
    delete: IUpstreamMethod;
    search: IUpstreamMethod;
    cancel: IUpstreamMethod;
    [key: string]: any;
};

export interface IMediaAnalyticsService extends bal.Service {
    prototype: MediaAnalyticsService;
    [key: string]: any;
}

export interface BusServiceConstructor {
    new (access, options): IMediaAnalyticsService;
    (access, options): IMediaAnalyticsService;
}
