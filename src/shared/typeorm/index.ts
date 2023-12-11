import { DataSource } from 'typeorm'
import { CreateRolesTable1702008270963 } from './migrations/1702008270963-CreateRolesTable'
import { Role } from '@roles/entities/Role'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1702008270963],
})
