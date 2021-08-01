import ILogger from './logger.interface';

export default class File implements ILogger {
  log(text: string): void {
    console.log(`File is writing ${text}`);
  }
}
