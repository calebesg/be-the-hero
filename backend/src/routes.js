const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

const routes = express.Router()

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

routes.post('/session', celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required()
  })
}), SessionController.store)

routes.get('/ongs', OngController.index)

routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(9).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}), OngController.store)

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), ProfileController.index)

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    pages: Joi.number()
  })
}), IncidentController.index)

routes.post('/incidents', celebrate({

  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown(),

  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required()
  })

}), IncidentController.store)

routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}), IncidentController.delete)

module.exports = routes
