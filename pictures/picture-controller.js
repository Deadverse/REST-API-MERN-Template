const { model } = require('mongoose');
const AppError = require('../errors/app-error');
const { Picture, PictureValidationSchema } = require('./picture-model');

const controller = {
  saySomething: async (toSay) => {
    console.log(toSay);
  },
  getAll: async () => await Picture.find(),
  create: async (picture) => {
    return await Picture.create(picture);
  }
};

module.exports = controller;