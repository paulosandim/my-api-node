import { RolesRepository } from '@roles/repositories/RolesRepository'
import { AppError } from '@shared/errors/AppError'
import { Request, Response } from 'express'

export class CreateRoleController {
  handle(request: Request, response: Response): Response {
    const { name } = request.body
    const rolesRepository = new RolesRepository()

    const roleAlreadyExists = rolesRepository.findByName(name)
    if (roleAlreadyExists) {
      throw new AppError('Roles already exists')
    }
    const role = rolesRepository.create({ name })

    return response.status(201).json(role)
  }
}
