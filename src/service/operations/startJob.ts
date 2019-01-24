import Joi from 'joi';
import { IUpstreamResponse, IOperationContext } from '../UpstreamInterfaces';
import responseFactory from './helpers/responseFactory';
import uuidv4 from './helpers/uuidv4';

export type startJobRequestType = {
    sourceUrl: string;
    language: string;
    types: Array<string>;
    parameters: {
        editRate: string;
    };
};

const requestSchema = Joi.object().keys({
    sourceUrl: Joi.string().required(),
    language: Joi.string().required(),
    types: Joi.array().items(Joi.string().required()).required(),
    parameters: Joi.object().keys({
        editRate: Joi.string().required()
    })
});

export default function startJob(req: any, operationContext: IOperationContext): IUpstreamResponse {
    // http://developer.avid.com/mediaAnalytics/api/media_analytics_api.html#startjob-operation
    try {
        const params: startJobRequestType = req.paramSet;
        Joi.validate(params, requestSchema, { presence: "required" }, function (err: Joi.ValidationError, value: startJobRequestType) {
            if(err) {
                const response: IUpstreamResponse = responseFactory(400, err.message);
                operationContext.reply(response);

                return response;
            } else {
                const response: IUpstreamResponse = responseFactory(200, {jobID: uuidv4()});
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
