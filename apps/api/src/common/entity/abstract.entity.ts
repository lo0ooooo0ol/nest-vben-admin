import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

export abstract class AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn({ name: 'created_at' ,type: 'datetime'})
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at',type: 'datetime' })
  updatedAt: Date
}
