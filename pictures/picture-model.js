const mongoose = require('mongoose');

const mongoosePictureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'title is missing'],
    trim: true,
    unique: true
  },
  details: {
    type: String,
    required: [true, 'details are missing'],
  }
});

const PictureValidationSchema = {
  title: {
    type: 'string',
    required: true,
    validation: {
      validator: (title) => title.length >= 4 && title.length <= 20,
      msg: 'title must have more than 4 and less than 20 characters.',
    },
  },
  details: {
    type: 'string',
    required: true,
    validation: {
      validator: (details) => details.length >= 4 && details.length <= 50,
      msg: 'details must have more than 4 and less than 50 characters.',
    },
  }
};

const Picture = mongoose.model('Picture', mongoosePictureSchema);

module.exports.Picture = Picture;
module.exports.PictureValidationSchema = PictureValidationSchema;
