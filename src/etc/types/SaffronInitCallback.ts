import type { Argv, ParseCallback } from 'yargs'

/**
 * Optional function that may be passed to `init`. This function will be passed
 * the global Yargs object, and may perform any additional configuration prior
 * to arguments being parsed. It may be synchronous or asynchronous, and it may
 * optionally return a Yargs `ParseCallback` function.
 */
export type SaffronInitCallback = (y: Argv) => void | ParseCallback | Promise<void | ParseCallback>;