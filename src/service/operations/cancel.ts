import Joi from 'joi';
import { IUpstreamResponse, IOperationContext } from '../UpstreamInterfaces';
import responseFactory from './helpers/responseFactory';

const requestSchema = Joi.object().keys({
    id: Joi.string().required()
});

type cancelRequest = {
    id: string;
};

export default function cancel(req: any, operationContext: IOperationContext): IUpstreamResponse {
    // http://developer.avid.com/mediaAnalytics/api/media_analytics_api.html#cancel-operation
    try {
        const params: cancelRequest = req.paramSet;
        Joi.validate(params, requestSchema, { presence: "required" }, function (err: Joi.ValidationError, value: cancelRequest) {
            if(err) {
                const response: IUpstreamResponse = responseFactory(400, err.message);
                operationContext.reply(response);

                return response;
            } else {
                const response: IUpstreamResponse = responseFactory(200, {message: `Job id: ${value.id} canceled`});
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
