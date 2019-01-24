import Joi from 'joi';
import { IUpstreamResponse, IOperationContext } from '../UpstreamInterfaces';
import responseFactory from './helpers/responseFactory';
import { JobResult } from './helpers/mediaAnalytics';

const requestSchema = Joi.object().keys({
    id: Joi.string().required(),
    type: Joi.string().required()
});

type getResultForTypeRequest = {
    id: string;
    type: string;
};

export default function getResultForType(req: any, operationContext: IOperationContext): IUpstreamResponse {
    // http://developer.avid.com/mediaAnalytics/api/media_analytics_api.html#getresultfortype-operation
    try {
        const params: getResultForTypeRequest = req.paramSet;
        Joi.validate(params, requestSchema, { presence: "required" }, function (err: Joi.ValidationError, value: getResultForTypeRequest) {
            if(err) {
                const response: IUpstreamResponse = responseFactory(400, err.message);
                operationContext.reply(response);

                return response;
            } else {
                const payload: JobResult = {
                    type: value.type,
                    dataType: "aa:time-based",
                    data: {
                        editRate: "30000/1001",
                        dropFrame: false,
                        layers: [
                            {
                                name: 'MAN_Sentiments',
                                segments: [
                                    {
                                        id: "1",
                                        start: 0,
                                        duration: 1027,
                                        attributes: [
                                            {
                                                name: "MAN_Sentiment_Type",
                                                value: "Neutral"
                                            }
                                        ]
                                    },
                                    {
                                        id: "2",
                                        start: 1027,
                                        duration: 280,
                                        attributes: [
                                            {
                                                name: "MAN_Sentiment_Type",
                                                value: "Neutral"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
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
