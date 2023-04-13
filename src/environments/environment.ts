import { apiEndPoints } from "src/app/shared/apiEndPoints";
import { EnvironmentConfig } from "./iconfig";

export const environment:EnvironmentConfig = {
    production : false,
    title: 'Flight Search Engine',
    apiURL : '',
    apiEndPoints: apiEndPoints
}