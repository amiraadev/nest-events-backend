/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn, OneToMany } from 'typeorm';
import { AttendeeEntity } from './attendee.entity';

@Entity()
export class EventEntity  {
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

  @OneToMany(()=> AttendeeEntity,(attendee)=> attendee.event)
  attendees: AttendeeEntity[];
}
