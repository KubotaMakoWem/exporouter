import { TaskApiClient } from '../generated';

const taskApiClientOption = {
    // BASE: 'http://192.168.0.1',
    HEADERS: { accept: 'text/plain' },
};
export const taskApi = new TaskApiClient(taskApiClientOption);