export type commonObject = {
    base: {
        systemType: string;
        systemID: string;
        type: string;
        id: string;
    },
    common: {
        name?: string;
        creator?: string;
        created?: string;
        modifier?: string;
        modified?: string;
        [key: string]: any;
    },
    _links: {
        self: {
            href: string;
        };
    };
    _embedded: any;
};

export type CTMSResource = "aa:assets" | "aa:asset" | "aa:attributes" | "aa:time-based" | "aa:keyframes" | "aa:thumb" | "aa:access-files" | "aa:access-file";
