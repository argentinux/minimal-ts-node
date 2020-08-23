import dotenv from 'dotenv'
import { LogLevelDesc } from 'loglevel'
dotenv.config()

export const __PRODUCTION__ = process.env.NODE_ENV === 'production'
export const __LOG_LEVEL__: LogLevelDesc = __PRODUCTION__ ? 'SILENT' : 'DEBUG'
