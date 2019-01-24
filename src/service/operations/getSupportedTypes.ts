import { IUpstreamResponse, IOperationContext } from '../UpstreamInterfaces';

export type gSTResonseType = {
    Video: Array<string>;
    Audio: Array<string>;
};

export const getSupportedTypesResonse: gSTResonseType = {
    Video: [
      "Annotations",
      "AudioEffects",
      "ContentModeration",
      "FaceDetection",
      "FramePatterns",
      "Keywords",
      "Metadata",
      "OCR",
      "Scenes",
      "Sentiments",
      "STT"
    ],
    Audio: [
      "AudioEffects",
      "ContentModeration",
      "Keywords",
      "Metadata",
      "Sentiments",
      "STT"
    ]
};

export default function getSupportedTypes(req: any, operationContext: IOperationContext): IUpstreamResponse {
    // http://developer.avid.com/mediaAnalytics/api/media_analytics_api.html#getsupportedtypes-operation
    const response: IUpstreamResponse = {
        context: {
            http: {
                response: {
                    status: 200,
                }
            }
        },
        resultSet: {
			// type your return fields here
			result: getSupportedTypesResonse,
        }
    }
    operationContext.reply(response);
    
    return response;
}
