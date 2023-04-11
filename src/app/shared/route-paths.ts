const paths = {
    home: '/home',
    flightSearch: '/home/flight-search',
    flightSearchEngine: '/home/flight-search-engine',
}

const screens = {
    'flightSearch':{
        title: 'Flight Search',
        routePath: 'flight-search',
        fullPath: paths.flightSearch,
        key: 'flightSearch',
        heading: 'Flight Search'
    },
    'flightSearchEngine':{
        title: 'Flight Search Engine',
        routePath: 'flight-search-engine',
        fullPath: paths.flightSearchEngine,
        key: 'flightSearchEngine',
        heading: 'Flight Search Engine'
    }
}

export {paths,screens};