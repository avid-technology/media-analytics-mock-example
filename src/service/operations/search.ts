import Joi from 'joi';
import { IUpstreamResponse, IOperationContext } from '../UpstreamInterfaces';
import responseFactory from './helpers/responseFactory';
import { Job } from './helpers/mediaAnalytics';

const requestSchema = Joi.object().keys({
    skip: Joi.number().required(),
    pageSize: Joi.number().required()
});

type searchRequest = {
    skip: number;
    pageSize: number;
};

export type searchResonseType = {
    jobs: Array<Job>;
    nextPage: {
        skip: number;
        pageSize: number;
        done: boolean;
    };
};

export default function search(req: any, operationContext: IOperationContext): IUpstreamResponse {
    // http://developer.avid.com/mediaAnalytics/api/media_analytics_api.html#search-operation
    try {
        const params: searchRequest = req.paramSet;
        Joi.validate(params, requestSchema, { presence: "required" }, function (err: Joi.ValidationError, value: searchRequest) {
            if(err) {
                const response: IUpstreamResponse = responseFactory(400, err.message);
                operationContext.reply(response);

                return response;
            } else {
                const searchResonse: searchResonseType = {
                    jobs: [
                        {
                            id: "afa30b23-ba66-49f3-91de-a731f1d83901",
                            state: "error",
                            message: null,
                            error: "Failed to analyze file",
                            progress: 55.78
                        },
                        {
                            id: "72dec2f9-ed52-4d7f-8f5c-48ba83d2e70a",
                            state: "uploading",
                            message: "Uploading file ...",
                            error: null,
                            progress: 10.0
                        },
                        {
                            id: "f3aaf563-c348-414c-856d-a228f8320f33",
                            state: "finished",
                            message: null,
                            error: null,
                            progress: 100
                        }
                    ],
                    nextPage: {
                        skip: value.skip,
                        pageSize: value.pageSize,
                        done: true
                    }
                };
                const response: IUpstreamResponse = responseFactory(200, searchResonse);
                operationContext.reply(response);

                return response;
            }
        });
    } catch (error) {
        const response: IUpstreamResponse = responseFactory(500, error.message);
        operationContext.reply(response);

        return response;
    }
}
