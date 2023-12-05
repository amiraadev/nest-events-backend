/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { EventEntity } from './event.entity';

@Entity()
export class AttendeeEntity  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @CreateDateColumn ({ name: 'when_date' })
  when: Date;
  
  @Column()
  address: string;

  @ManyToOne(()=>EventEntity,(event) => event.attendees,{
    nullable: false
  })
  @JoinColumn({
    name:'event_id',
    referencedColumnName: 'secondary'
  })
  event: EventEntity;
}
