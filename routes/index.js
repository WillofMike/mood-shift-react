const DayController = require('../controllers/day')
const UserController = require('../controllers/user')
module.exports = (app) => {
  app.get('/day', DayController.read)
  app.get('/day/:id', DayController.read)
  app.post('/day', DayController.create)
  app.put('/day/:id', DayController.update)
  app.delete('/day/:id', DayController.delete)
  app.get('/user', UserController.read)
  app.get('/user/:id', UserController.read)
  app.post('/user', UserController.create)
  app.put('/user/:id', UserController.update)
  app.delete('/user/:id', UserController.delete)
}
