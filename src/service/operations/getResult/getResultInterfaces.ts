import { JobResult } from '../helpers/mediaAnalytics';

export type getResultPayload = {
    id: string;
    results: Array<JobResult>;
};

export const ExampleSentiment: JobResult = {
    type: "Sentiments",
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
}

export const ExampleResource: JobResult = {
    type: "Metadata",
    dataType: "aa:asset",
    data: {
        base: {
            systemType: 'MAM',
            systemID: "Mam_12",
            type: 'interplay-mam',
            id: 'BEEF'
        },
        common: {
            name: "My new video",
            creator: "Administrator",
            created: "2016-06-09T16:24:23.027+02:00",
            modifier: "Administrator",
            modified: "2016-06-09T16:24:23.027+02:00",
            comment: "Deja vu!"
        },
        _links: {
            self: {
                href: "http://dummy"
            },
            "aa:attributes": {
                "href": "http://dummy"
            }
        },
        _embedded: {
            "aa:attributes": {
                attributes: [
                    {
                        name: "MAN_IsRacialContent",
                        value: false
                    },
                    {
                        name: "MAN_Topics",
                        value: [
                            {
                                attributes: [
                                    {
                                        name: "MAN_Topic_Name",
                                        value: "anthony dragon"
                                    },
                                    {
                                        name: "TopicRank",
                                        value: 4
                                    }
                                ]
                            }
                        ]
                    },
                ],
                _links: {
                    "self": {
                        "href": "http://dummy"
                    }
                }
            }
        }
    }
};

