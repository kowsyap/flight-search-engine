import { environment } from 'src/environments/environment';

let env;

if(window.location.host.indexOf('localhost')>-1) env='local';
else env='QA';

export default {
    apiUrl : environment.apiURL,
    endPoints :environment.apiEndPoints,
    env: env
}