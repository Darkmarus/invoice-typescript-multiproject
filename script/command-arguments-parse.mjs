export default function parseCommandLineArguments() {
    const args = {};
    for (let i = 2; i < process.argv.length; i++) {
        const arg = process.argv[i];
        if (arg.startsWith('--')) {
            let key, value;
            if (arg.includes('=')) {
                [key, value] = arg.substring(2).split('=', 2);
            } else {
                key = arg.substring(2);
                const nextArg = process.argv[i + 1];
                if (nextArg && !nextArg.startsWith('--')) {
                    value = nextArg;
                    i++;
                } else {
                    value = true;
                }
            }
            args[key] = value;
        }
    }
    return args;
}
