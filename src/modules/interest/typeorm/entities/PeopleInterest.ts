import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('people_interest')
class PeopleInterest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  id_people: string;

  @Column()
  id_interest: string;

  @Column()
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default PeopleInterest;
