import { Status, IUpstreamResponse } from '../../UpstreamInterfaces';

export default function responseFactory(status: Status, payload: any = undefined): IUpstreamResponse {
    const response: IUpstreamResponse = {
        context: {
            http: {
                response: {
                    status: status,
                }
            }
        },
        resultSet: {
			// type your return fields here
			result: payload,
        }
    }

    return response;
}
