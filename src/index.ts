import duplexify from "duplexify";
import lps from "length-prefixed-stream";
import stream from "stream";

type DuplexLPStream = duplexify.Duplexify & { finished: typeof finished }

function finished(callback: (error?: NodeJS.ErrnoException) => any): any
function finished(options: stream.FinishedOptions, callback: (error?: NodeJS.ErrnoException) => any): any
function finished(arg1, arg2?): any { }

function createDuplexLPStream(socket: stream.Duplex): DuplexLPStream {
  let inputStream = lps.decode();
  socket.pipe(inputStream, { end: true });
  let outputStream = lps.encode();
  outputStream.pipe(socket, { end: true });

  let duplex: duplexify.Duplexify & { finished: typeof finished } = duplexify(outputStream, inputStream) as any;

  duplex.finished = (...args) => {
    (stream.finished as any)(duplex, ...args);
  };

  return duplex;
}

export = createDuplexLPStream;