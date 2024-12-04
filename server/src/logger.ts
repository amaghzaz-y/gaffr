import { styleText } from 'node:util';
class Logger {
    static Info(message: string) {
        const ft = styleText('cyan', "[INFO]");
        const time = `[${new Date().toISOString()}]`
        console.log(time, ft, message)
    }
    static Warn(message: string) {
        const ft = styleText('yellow', "[WARN]");
        const time = `[${new Date().toISOString()}]`
        console.log(time, ft, message)
    }
    static Error(message: string) {
        const ft = styleText('red', "[ERROR]");
        const time = `[${new Date().toISOString()}]`
        console.log(time, ft, message)
    }
    static Debug(message: string) {
        const ft = styleText('magenta', "[DEBUG]");
        const time = `[${new Date().toISOString()}]`
        console.log(time, ft, message)
    }
}

export default Logger