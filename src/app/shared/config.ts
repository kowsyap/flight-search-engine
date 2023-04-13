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
            "departureDate": "2023-05-20",
            "departureTime": "06:00:00",
            "flightClass": "Economy",
            "flightNumber": "845",
            "originStnCity": "BOM",
            "destinationStnCity": "BLR",
            "flightOperatedBy": "vistara", 
            "cost": "1000", "duration": "01:30:00"
        }, {
            "departureDate": "2023-05-20",
            "departureTime": "07:00:00",
            "flightClass": "Economy",
            "flightNumber": "846",
            "originStnCity": "BOM",
            "destinationStnCity": "BLR",
            "flightOperatedBy": "airindia",
            "cost": "2000", "duration": "01:30:00"
        },
        {
            "departureDate": "2023-05-20",
            "departureTime": "06:00:00",
            "flightClass": "Economy",
            "flightNumber": "845",
            "originStnCity": "BOM",
            "destinationStnCity": "BLR",
            "flightOperatedBy": "vistara", 
            "cost": "1000", "duration": "01:30:00"
        }, {
            "departureDate": "2023-05-20",
            "departureTime": "07:00:00",
            "flightClass": "Economy",
            "flightNumber": "846",
            "originStnCity": "BOM",
            "destinationStnCity": "BLR",
            "flightOperatedBy": "airindia",
            "cost": "2000", "duration": "01:30:00"
        },
        {
            "departureDate": "2023-05-20",
            "departureTime": "06:00:00",
            "flightClass": "Economy",
            "flightNumber": "845",
            "originStnCity": "BOM",
            "destinationStnCity": "BLR",
            "flightOperatedBy": "vistara", 
            "cost": "1000", "duration": "01:30:00"
        }, {
            "departureDate": "2023-05-20",
            "departureTime": "07:00:00",
            "flightClass": "Economy",
            "flightNumber": "846",
            "originStnCity": "BOM",
            "destinationStnCity": "BLR",
            "flightOperatedBy": "airindia",
            "cost": "2000", "duration": "01:30:00"
        },
        {
            "departureDate": "2023-05-20",
            "departureTime": "06:00:00",
            "flightClass": "Economy",
            "flightNumber": "845",
            "originStnCity": "BOM",
            "destinationStnCity": "BLR",
            "flightOperatedBy": "vistara", 
            "cost": "1000", "duration": "01:30:00"
        }, {
            "departureDate": "2023-05-20",
            "departureTime": "07:00:00",
            "flightClass": "Economy",
            "flightNumber": "846",
            "originStnCity": "BOM",
            "destinationStnCity": "BLR",
            "flightOperatedBy": "airindia",
            "cost": "2000", "duration": "01:30:00"
        },
        {
            "departureDate": "2023-05-20",
            "departureTime": "06:00:00",
            "flightClass": "Economy",
            "flightNumber": "845",
            "originStnCity": "BOM",
            "destinationStnCity": "BLR",
            "flightOperatedBy": "vistara", 
            "cost": "1000", "duration": "01:30:00"
        }, {
            "departureDate": "2023-05-20",
            "departureTime": "07:00:00",
            "flightClass": "Economy",
            "flightNumber": "846",
            "originStnCity": "BOM",
            "destinationStnCity": "BLR",
            "flightOperatedBy": "airindia",
            "cost": "2000", "duration": "01:30:00"
        },
        {
            "departureDate": "2023-05-20",
            "departureTime": "06:00:00",
            "flightClass": "Economy",
            "flightNumber": "845",
            "originStnCity": "BOM",
            "destinationStnCity": "BLR",
            "flightOperatedBy": "vistara", 
            "cost": "1000", "duration": "01:30:00"
        }, {
            "departureDate": "2023-05-20",
            "departureTime": "07:00:00",
            "flightClass": "Economy",
            "flightNumber": "846",
            "originStnCity": "BOM",
            "destinationStnCity": "BLR",
            "flightOperatedBy": "airindia",
            "cost": "2000", "duration": "01:30:00"
        },
        {
            "departureDate": "2023-05-20",
            "departureTime": "06:00:00",
            "flightClass": "Economy",
            "flightNumber": "845",
            "originStnCity": "BOM",
            "destinationStnCity": "BLR",
            "flightOperatedBy": "vistara", 
            "cost": "1000", "duration": "01:30:00"
        }, {
            "departureDate": "2023-05-20",
            "departureTime": "07:00:00",
            "flightClass": "Economy",
            "flightNumber": "846",
            "originStnCity": "BOM",
            "destinationStnCity": "BLR",
            "flightOperatedBy": "airindia",
            "cost": "2000", "duration": "01:30:00"
        },
        {
            "departureDate": "2023-05-20",
            "departureTime": "06:00:00",
            "flightClass": "Economy",
            "flightNumber": "845",
            "originStnCity": "BOM",
            "destinationStnCity": "BLR",
            "flightOperatedBy": "vistara", 
            "cost": "1000", "duration": "01:30:00"
        }, {
            "departureDate": "2023-05-20",
            "departureTime": "07:00:00",
            "flightClass": "Economy",
            "flightNumber": "846",
            "originStnCity": "BOM",
            "destinationStnCity": "BLR",
            "flightOperatedBy": "airindia",
            "cost": "2000", "duration": "01:30:00"
        },
        {
            "departureDate": "2023-05-20",
            "departureTime": "06:00:00",
            "flightClass": "Economy",
            "flightNumber": "845",
            "originStnCity": "BOM",
            "destinationStnCity": "BLR",
            "flightOperatedBy": "vistara", 
            "cost": "1000", "duration": "01:30:00"
        }, {
            "departureDate": "2023-05-20",
            "departureTime": "07:00:00",
            "flightClass": "Economy",
            "flightNumber": "846",
            "originStnCity": "BOM",
            "destinationStnCity": "BLR",
            "flightOperatedBy": "airindia",
            "cost": "2000", "duration": "01:30:00"
        },
        {
            "departureDate": "2023-05-20",
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
            "cost": "2000", "duration": "01:30:00"
        },
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
            "cost": "2000", "duration": "01:30:00"
        },
    ],
    citiesList: [{"code":"BOM", "name":"MUMBAI"},{"code":"GOI", "name":"GOA"},{"code":"BLR",
    "name":"Bengaluru"},{"code":"MAA", "name":"Chennai"}],
    airlinesList: [{"code":"vistara","name":"vistara"}, {"code":"airindia","name":"AIR INDIA"}] 

    
}