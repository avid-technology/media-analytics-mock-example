import Joi from 'joi';
import { IUpstreamResponse, IOperationContext } from '../../UpstreamInterfaces';
import responseFactory from '../helpers/responseFactory';
import { getResultPayload, ExampleSentiment, ExampleResource } from './getResultInterfaces';

const requestSchema = Joi.object().keys({
    id: Joi.string().required()
});

type getResultRequest = {
    id: string;
};

export default function getResult(req: any, operationContext: IOperationContext): IUpstreamResponse {
    // http://developer.avid.com/mediaAnalytics/api/media_analytics_api.html#getresult-operation
    try {
        const params: getResultRequest = req.paramSet;
        Joi.validate(params, requestSchema, { presence: "required" }, function (err: Joi.ValidationError, value: getResultPayload) {
            if (err) {
                const response: IUpstreamResponse = responseFactory(400, err.message);
                operationContext.reply(response);

                return response;
            } else {
                const payload: getResultPayload = {
                    id: value.id,
                    results: [
                        ExampleSentiment,
                        ExampleResource
                    ]
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
