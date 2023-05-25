const path = require('path');

module.exports = {
    webpack: config => {
        config.resolve.alias['components'] = path.join(__dirname, 'components');
        config.resolve.alias['public'] = path.join(__dirname, 'public');

        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    }
}
