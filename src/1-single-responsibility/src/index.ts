import Client from './principle/client';
import Notify from './principle/notify';

const client = new Client('Bob');
const notify = new Notify(client);

notify.sendEmail();
