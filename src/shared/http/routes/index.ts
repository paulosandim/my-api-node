import { AppError } from '@shared/errors/AppError'
import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response) => {
  throw new AppError('Acesso negado! 😭', 401)
  return response.json({ message: 'Hello World! ✨' })
})

export { routes }
