import Joi from 'joi';

const schemaLogin = Joi.object({
  username: Joi.string().required().messages({
    message: '"username" is required',
  }),
  password: Joi.string().required().messages({
    message: '"password" is required',
  }),
});

// const schemaProduct = Joi.object({
//   name: Joi.string().min(3).required().messages({
//     'message': '"name" must be a string',
//     message: ''
//   })
// })

export default schemaLogin;