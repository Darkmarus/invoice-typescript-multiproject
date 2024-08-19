module.exports = {
    apps: [
        {
            script: 'packages/projects/starter/dist/index.mjs',
            watch: ['packages/**/src'],
        },
    ],
};
