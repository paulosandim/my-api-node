import { RolesRepository } from '@roles/repositories/RolesRepository'
import { ListRolesUseCase } from './ListRolesUseCase'
import { ListRolesController } from './ListRolesController'

const rolesRespository = new RolesRepository()
const listRolesUseCase = new ListRolesUseCase(rolesRespository)
export const listRolesController = new ListRolesController(listRolesUseCase)
