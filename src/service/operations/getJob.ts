import Joi from 'joi';
import { IUpstreamResponse, IOperationContext } from '../UpstreamInterfaces';
import responseFactory from './helpers/responseFactory';
import { jobStateType } from './helpers/mediaAnalytics';

type getJobPayload = {
    id: string;
    state: jobStateType;
    message: string;
    error: string;
    progress: number;
};

const requestSchema = Joi.object().keys({
    id: Joi.string().required()
});

type getJobRequest = {
    id: string;
};

export default function getJob(req: any, operationContext: IOperationContext): IUpstreamResponse {
    // http://developer.avid.com/mediaAnalytics/api/media_analytics_api.html#getjob-operation
    try {
        const params: getJobRequest = req.paramSet;
        Joi.validate(params, requestSchema, { presence: "required" }, function (err: Joi.ValidationError, value: getJobRequest) {
            if(err) {
                const response: IUpstreamResponse = responseFactory(400, err.message);
                operationContext.reply(response);

                return response;
            } else {
                const payload: getJobPayload = {
                    id: value.id,
                    state: "finished",
                    message: "Some status message",
                    error: "Some error message",
                    progress: 55.78
                };
                const response: IUpstreamResponse = responseFactory(200, payload);
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
