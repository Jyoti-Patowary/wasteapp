import logger from "pino";
import dayjs from "dayjs";

const log = logger({
    pinoHttp: {
        transport: {
            target: 'pino-pretty',
            options: {
                ignore:'req.headers,res',
            }
        }
    },
  prettyPrint: true,
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default log;