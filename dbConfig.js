const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URL);

require('./models/inmueble.model');