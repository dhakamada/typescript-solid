import File from './principle/file-logger';
import Logger from './principle/logger';

const logger = new Logger(new File());
logger.info('something');
