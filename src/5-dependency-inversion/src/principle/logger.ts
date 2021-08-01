import ILogger from './logger.interface';

export default class Logger {
  constructor(private logger: ILogger) {}

  info(text: string) {
    this.logger.log(text);
  }
}
