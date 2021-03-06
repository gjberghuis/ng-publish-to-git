import yargs from 'yargs';


export interface CommandLineArgs {
  commitPrefix?: string;
  debug?: boolean;
  package?: string;
}

export let commandLineArgs: CommandLineArgs = {};

export function processCommandLineArguments() {
  commandLineArgs = yargs
    .usage('Usage: $0 [--commit-prefix your-prefix] [--package package-name] [--debug]')
    .strict()
    .options('commit-prefix', { describe: 'Prefixes commit messages' })
    .string('commit-prefix')
    .option('debug', { alias: 'd', describe: 'run in debug mode' })
    .boolean('debug')
    .option('package', { alias: 'p', describe: 'only publish this package' })
    .string('package')
    .argv;
}
