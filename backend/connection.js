const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://anjana:anjanaAnju@cluster0.hxrre.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() =>
    { console.log('Connected!')
    })
    .catch((err) => {
        console.log(err)
    })