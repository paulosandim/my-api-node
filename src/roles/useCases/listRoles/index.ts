import { RolesRepository } from '@roles/repositories/RolesRepository'
import { ListRolesUseCase } from './ListRolesUseCase'
import { ListRolesController } from './ListRolesController'

const rolesRespository = RolesRepository.getInstance()
const listRolesUseCase = new ListRolesUseCase(rolesRespository)
export const listRolesController = new ListRolesController(listRolesUseCase)
