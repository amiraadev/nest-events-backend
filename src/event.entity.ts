/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column()
  description: string;

  @CreateDateColumn ({ name: 'when_date' })
  when: Date;

  @Column()
  address: string;
}
