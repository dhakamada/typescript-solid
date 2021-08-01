import Client from './client';

export default class Notify {
  constructor(private client: Client) {}

  sendEmail(): void {
    console.log(`Send email to ${this.client.name}`);
  }
}
