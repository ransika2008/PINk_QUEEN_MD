const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://raw.githubusercontent.com/ransika2008/Img-2/refs/heads/main/Futuristic%20sci-fi%20silhouetted%203D%20text%20design%20PINK%20QUEEN%20MD%20and%20I.am%20Alive%20in%20embossed%20gold%20with%20baroque%20flourishes%20on%20a%20rose%20pink%20gradient%20background.%20%20Golden%20crown%20atop%20title%2C%20backlighting%2C%20advanced%20technology%20space%20elements.jpglive.jpg%20robin%20iz%20alive.jpg' },
    { key: 'ALIVE_MSG', value: '🌐 *Hello  ${pushname}* , I am alive now!!\n\n🥶𝐌𝐚𝐝𝐞 𝐛𝐲 CHAMINDU🥶' },
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'true' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
