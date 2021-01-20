const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rajnish1999:rajatiwari1@cluster0.jcfk2.mongodb.net/farc-api?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

//in this file we are connecting to the mongodb atlas, the link of connection is inside the mongoose.connect
//basically this mongoose configuration file