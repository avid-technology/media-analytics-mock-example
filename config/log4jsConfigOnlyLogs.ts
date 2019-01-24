const config = {
    'appenders': {
        'logs': {
            'type': 'console',
        }
    },
    'categories': {
        'default': {'appenders': ['logs'], 'level': 'TRACE'},
    }
};

export default config;
