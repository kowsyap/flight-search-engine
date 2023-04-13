import { environment } from 'src/environments/environment';

let env;

if(window.location.host.indexOf('localhost')>-1) env='local';
else env='QA';

export default {
    apiUrl : environment.apiURL,
    endPoints :environment.apiEndPoints,
    env: env,
    flightList: [
        {
            "departureDate": "2023-05-10",
            "departureTime": "06:00:00",
            "flightClass": "Economy",
            "flightNumber": "845",
            "originStnCity": "BOM",
            "destinationStnCity": "BLR",
            "flightOperatedBy": "vistara", 
            "cost": "1000", "duration": "01:30:00"
        }, {
            "departureDate": "2023-05-10",
            "departureTime": "07:00:00",
            "flightClass": "Economy",
            "flightNumber": "846",
            "originStnCity": "BOM",
            "destinationStnCity": "BLR",
            "flightOperatedBy": "airindia",
            "cost": "2000", "duration": "03:30:00"
        },
        {
            "departureDate": "2023-05-10",
            "departureTime": "10:00:00",
            "flightClass": "Business",
            "flightNumber": 123,
            "originStnCity": "BOM",
            "destinationStnCity": "GOI",
            "flightOperatedBy": "gofirst",
            "cost": 4164,
            "duration": "4:30:00"
        },
        {
            "departureDate": "2023-05-07",
            "departureTime": "16:00:00",
            "flightClass": "Economy",
            "flightNumber": 124,
            "originStnCity": "GOI",
            "destinationStnCity": "HYD",
            "flightOperatedBy": "vistara",
            "cost": 3024,
            "duration": "4:30:00"
        },
        {
            "departureDate": "2023-04-29",
            "departureTime": "10:00:00",
            "flightClass": "Economy",
            "flightNumber": 125,
            "originStnCity": "BOM",
            "destinationStnCity": "GOI",
            "flightOperatedBy": "airindia",
            "cost": 3073,
            "duration": "12:00:00"
        },
        {
            "departureDate": "2023-05-02",
            "departureTime": "09:00:00",
            "flightClass": "Economy",
            "flightNumber": 126,
            "originStnCity": "BLR",
            "destinationStnCity": "GOI",
            "flightOperatedBy": "indigo",
            "cost": 1827,
            "duration": "4:30:00"
        },
        {
            "departureDate": "2023-04-29",
            "departureTime": "09:00:00",
            "flightClass": "Business",
            "flightNumber": 127,
            "originStnCity": "MAA",
            "destinationStnCity": "GOI",
            "flightOperatedBy": "spicejet",
            "cost": 3695,
            "duration": "02:00:00"
        },
        {
            "departureDate": "2023-04-24",
            "departureTime": "10:00:00",
            "flightClass": "Business",
            "flightNumber": 128,
            "originStnCity": "HYD",
            "destinationStnCity": "MAA",
            "flightOperatedBy": "vistara",
            "cost": 1024,
            "duration": "3:30:00"
        },
        {
            "departureDate": "2023-04-23",
            "departureTime": "10:00:00",
            "flightClass": "Economy",
            "flightNumber": 129,
            "originStnCity": "GOI",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "spicejet",
            "cost": 3235,
            "duration": "3:30:00"
        },
        {
            "departureDate": "2023-04-22",
            "departureTime": "10:00:00",
            "flightClass": "Business",
            "flightNumber": 130,
            "originStnCity": "BLR",
            "destinationStnCity": "HYD",
            "flightOperatedBy": "airindia",
            "cost": 3213,
            "duration": "3:30:00"
        },
        {
            "departureDate": "2023-04-26",
            "departureTime": "12:30:00",
            "flightClass": "Business",
            "flightNumber": 131,
            "originStnCity": "GOI",
            "destinationStnCity": "HYD",
            "flightOperatedBy": "airindia",
            "cost": 3028,
            "duration": "02:00:00"
        },
        {
            "departureDate": "2023-04-22",
            "departureTime": "10:00:00",
            "flightClass": "Economy",
            "flightNumber": 132,
            "originStnCity": "BLR",
            "destinationStnCity": "HYD",
            "flightOperatedBy": "vistara",
            "cost": 2318,
            "duration": "7:00:00"
        },
        {
            "departureDate": "2023-04-25",
            "departureTime": "16:00:00",
            "flightClass": "Economy",
            "flightNumber": 133,
            "originStnCity": "MAA",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "indigo",
            "cost": 4622,
            "duration": "02:00:00"
        },
        {
            "departureDate": "2023-05-02",
            "departureTime": "10:00:00",
            "flightClass": "Business",
            "flightNumber": 134,
            "originStnCity": "BOM",
            "destinationStnCity": "GOI",
            "flightOperatedBy": "airindia",
            "cost": 2466,
            "duration": "3:30:00"
        },
        {
            "departureDate": "2023-04-14",
            "departureTime": "16:00:00",
            "flightClass": "Business",
            "flightNumber": 135,
            "originStnCity": "HYD",
            "destinationStnCity": "BLR",
            "flightOperatedBy": "gofirst",
            "cost": 2888,
            "duration": "02:00:00"
        },
        {
            "departureDate": "2023-05-05",
            "departureTime": "09:00:00",
            "flightClass": "Business",
            "flightNumber": 136,
            "originStnCity": "HYD",
            "destinationStnCity": "GOI",
            "flightOperatedBy": "vistara",
            "cost": 2396,
            "duration": "3:30:00"
        },
        {
            "departureDate": "2023-05-06",
            "departureTime": "12:30:00",
            "flightClass": "Economy",
            "flightNumber": 137,
            "originStnCity": "HYD",
            "destinationStnCity": "GOI",
            "flightOperatedBy": "spicejet",
            "cost": 4768,
            "duration": "3:30:00"
        },
        {
            "departureDate": "2023-05-01",
            "departureTime": "10:00:00",
            "flightClass": "Business",
            "flightNumber": 138,
            "originStnCity": "GOI",
            "destinationStnCity": "HYD",
            "flightOperatedBy": "spicejet",
            "cost": 4183,
            "duration": "02:00:00"
        },
        {
            "departureDate": "2023-05-01",
            "departureTime": "12:30:00",
            "flightClass": "Business",
            "flightNumber": 139,
            "originStnCity": "BOM",
            "destinationStnCity": "BLR",
            "flightOperatedBy": "vistara",
            "cost": 3933,
            "duration": "12:00:00"
        },
        {
            "departureDate": "2023-04-21",
            "departureTime": "12:30:00",
            "flightClass": "Business",
            "flightNumber": 140,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "airindia",
            "cost": 2245,
            "duration": "02:00:00"
        },
        {
            "departureDate": "2023-05-02",
            "departureTime": "16:00:00",
            "flightClass": "Economy",
            "flightNumber": 141,
            "originStnCity": "GOI",
            "destinationStnCity": "HYD",
            "flightOperatedBy": "indigo",
            "cost": 1457,
            "duration": "7:00:00"
        },
        {
            "departureDate": "2023-04-19",
            "departureTime": "07:00:00",
            "flightClass": "Business",
            "flightNumber": 142,
            "originStnCity": "MAA",
            "destinationStnCity": "HYD",
            "flightOperatedBy": "indigo",
            "cost": 2557,
            "duration": "7:00:00"
        },
        {
            "departureDate": "2023-05-02",
            "departureTime": "12:30:00",
            "flightClass": "Business",
            "flightNumber": 143,
            "originStnCity": "MAA",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "spicejet",
            "cost": 2963,
            "duration": "7:00:00"
        },
        {
            "departureDate": "2023-04-14",
            "departureTime": "09:00:00",
            "flightClass": "Economy",
            "flightNumber": 123,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "gofirst",
            "cost": 2353,
            "duration": "3:30:00"
        },
        {
            "departureDate": "2023-04-14",
            "departureTime": "09:00:00",
            "flightClass": "Business",
            "flightNumber": 124,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "indigo",
            "cost": 2389,
            "duration": "12:00:00"
        },
        {
            "departureDate": "2023-04-14",
            "departureTime": "10:00:00",
            "flightClass": "Business",
            "flightNumber": 125,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "vistara",
            "cost": 2859,
            "duration": "7:00:00"
        },
        {
            "departureDate": "2023-04-14",
            "departureTime": "07:00:00",
            "flightClass": "Business",
            "flightNumber": 126,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "airindia",
            "cost": 3776,
            "duration": "12:00:00"
        },
        {
            "departureDate": "2023-04-14",
            "departureTime": "16:00:00",
            "flightClass": "Business",
            "flightNumber": 127,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "airindia",
            "cost": 3371,
            "duration": "3:30:00"
        },
        {
            "departureDate": "2023-04-14",
            "departureTime": "09:00:00",
            "flightClass": "Economy",
            "flightNumber": 128,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "gofirst",
            "cost": 2627,
            "duration": "02:00:00"
        },
        {
            "departureDate": "2023-04-15",
            "departureTime": "07:00:00",
            "flightClass": "Business",
            "flightNumber": 129,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "spicejet",
            "cost": 3130,
            "duration": "3:30:00"
        },
        {
            "departureDate": "2023-04-15",
            "departureTime": "09:00:00",
            "flightClass": "Economy",
            "flightNumber": 130,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "gofirst",
            "cost": 1074,
            "duration": "7:00:00"
        },
        {
            "departureDate": "2023-04-13",
            "departureTime": "16:00:00",
            "flightClass": "Business",
            "flightNumber": 131,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "vistara",
            "cost": 2432,
            "duration": "3:30:00"
        },
        {
            "departureDate": "2023-04-15",
            "departureTime": "07:00:00",
            "flightClass": "Business",
            "flightNumber": 132,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "indigo",
            "cost": 3825,
            "duration": "02:00:00"
        },
        {
            "departureDate": "2023-04-15",
            "departureTime": "07:00:00",
            "flightClass": "Business",
            "flightNumber": 133,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "airindia",
            "cost": 1921,
            "duration": "3:30:00"
        },
        {
            "departureDate": "2023-04-14",
            "departureTime": "10:00:00",
            "flightClass": "Business",
            "flightNumber": 134,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "indigo",
            "cost": 4504,
            "duration": "12:00:00"
        },
        {
            "departureDate": "2023-04-15",
            "departureTime": "07:00:00",
            "flightClass": "Economy",
            "flightNumber": 135,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "indigo",
            "cost": 3255,
            "duration": "12:00:00"
        },
        {
            "departureDate": "2023-04-15",
            "departureTime": "09:00:00",
            "flightClass": "Economy",
            "flightNumber": 136,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "gofirst",
            "cost": 2279,
            "duration": "12:00:00"
        },
        {
            "departureDate": "2023-04-15",
            "departureTime": "10:00:00",
            "flightClass": "Business",
            "flightNumber": 137,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "gofirst",
            "cost": 4279,
            "duration": "4:30:00"
        },
        {
            "departureDate": "2023-04-14",
            "departureTime": "12:30:00",
            "flightClass": "Business",
            "flightNumber": 138,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "gofirst",
            "cost": 1658,
            "duration": "12:00:00"
        },
        {
            "departureDate": "2023-04-15",
            "departureTime": "07:00:00",
            "flightClass": "Business",
            "flightNumber": 139,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "spicejet",
            "cost": 4198,
            "duration": "7:00:00"
        },
        {
            "departureDate": "2023-04-14",
            "departureTime": "09:00:00",
            "flightClass": "Business",
            "flightNumber": 140,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "vistara",
            "cost": 4976,
            "duration": "12:00:00"
        },
        {
            "departureDate": "2023-04-14",
            "departureTime": "16:00:00",
            "flightClass": "Economy",
            "flightNumber": 141,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "airindia",
            "cost": 2690,
            "duration": "4:30:00"
        },
        {
            "departureDate": "2023-04-13",
            "departureTime": "16:00:00",
            "flightClass": "Business",
            "flightNumber": 142,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "spicejet",
            "cost": 4846,
            "duration": "3:30:00"
        },
        {
            "departureDate": "2023-04-14",
            "departureTime": "12:30:00",
            "flightClass": "Business",
            "flightNumber": 143,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "airindia",
            "cost": 2122,
            "duration": "12:00:00"
        },
        {
            "departureDate": "2023-04-15",
            "departureTime": "16:00:00",
            "flightClass": "Economy",
            "flightNumber": 144,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "spicejet",
            "cost": 3351,
            "duration": "4:30:00"
        },
        {
            "departureDate": "2023-04-14",
            "departureTime": "07:00:00",
            "flightClass": "Business",
            "flightNumber": 145,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "spicejet",
            "cost": 2965,
            "duration": "4:30:00"
        },
        {
            "departureDate": "2023-04-14",
            "departureTime": "09:00:00",
            "flightClass": "Economy",
            "flightNumber": 146,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "indigo",
            "cost": 4730,
            "duration": "12:00:00"
        },
        {
            "departureDate": "2023-04-15",
            "departureTime": "10:00:00",
            "flightClass": "Economy",
            "flightNumber": 147,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "spicejet",
            "cost": 1399,
            "duration": "3:30:00"
        },
        {
            "departureDate": "2023-04-15",
            "departureTime": "16:00:00",
            "flightClass": "Economy",
            "flightNumber": 148,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "spicejet",
            "cost": 3684,
            "duration": "4:30:00"
        },
        {
            "departureDate": "2023-04-14",
            "departureTime": "07:00:00",
            "flightClass": "Business",
            "flightNumber": 149,
            "originStnCity": "HYD",
            "destinationStnCity": "BOM",
            "flightOperatedBy": "indigo",
            "cost": 4714,
            "duration": "3:30:00"
        }
    ],
    citiesList: [
        {"code":"BOM", "name":"MUMBAI",latitude:19.0760,longitude:72.8777},
        {"code":"GOI", "name":"GOA",latitude:15.496777,longitude:73.827827},
        {"code":"BLR", "name":"Bengaluru",latitude:12.972442,longitude:77.594566},
        {"code":"MAA", "name":"Chennai",latitude:13.073226,longitude:80.260918},
        {"code":"HYD", "name":"Hyderabad",latitude:17.387140,longitude:78.391983}
    ],
    airlinesList: [
        {"code":"vistara","name":"vistara",},
        {"code":"airindia","name":"AIR INDIA"},
        {"code":"spicejet","name":"Spice Jet"},
        {"code":"indigo","name":"IndiGo"},
        {"code":"gofirst","name":"Go First"},
    ]

    
}