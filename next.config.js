const withPlugins = require("next-compose-plugins");

/** @type {import('next').NextConfig} */
const f = {
    images: {
        domains: ["*"],
    },
};

module.exports = withPlugins([], f);
