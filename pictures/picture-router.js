const express = require('express');
const AppError = require('../errors/app-error');
const router = express.Router();

const { handleAsyncError } = require('../errors/error-handler');
const controller = require('./picture-controller');

router.get('/', handleAsyncError(async (req, res, _next) => {
    let picture = {
        title: 'Sample Picture',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar urna ut fringilla faucibus. In hac habitasse platea dictumst. Cras viverra felis eget purus blandit aliquet. Vestibulum maximus sagittis tempus. Ut quis risus urna. Sed libero sem, pellentesque porttitor lacinia eu, convallis ac nisi. Duis vel volutpat lectus. Proin sit amet odio non nisi commodo vehicula. Donec rhoncus, odio sed lacinia efficitur, augue mauris sodales felis, eu pretium risus libero et risus. Nulla vel felis sem. Duis ullamcorper, odio eget posuere posuere, justo nisi vehicula nulla, in euismod lorem odio at lorem. Morbi non arcu pretium, interdum ligula tristique, ultrices eros. Vivamus lacus lacus, varius eu tortor non, lacinia eleifend nisi. Praesent facilisis non turpis et sagittis. Nullam et vulputate enim, ut varius lorem. Sed semper sem eu magna cursus varius. '
    }
    console.log('Try to find your documents...');
    res.status(200).json(await controller.getAll());
}));


module.exports = router;

  
