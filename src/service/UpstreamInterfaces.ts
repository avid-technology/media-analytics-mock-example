export type Status = 200 | 400 | 401 | 404 | 500

export interface IUpstreamResponse {
    context: {
        http: {
            response: {
                status: Status,
                [key: string ]: any 
            },
            [key: string]: any 
        },
        [key: string]: any 
    },
    resultSet: {
        result: any
    },
    [key: string]: any 
}

export interface IOperationContext {
    reply(data: IUpstreamResponse): void;
    getBusAccess(): Function;
    ack(): void;
    error(): void;
    getMessage(): any;
    [key: string]: any;
}

export type IUpstreamMethod = (req: any, operationContext: IOperationContext) => void;
