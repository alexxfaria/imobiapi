import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import People from '@modules/people/typeorm/entities/People';
import PhotoAds from './PhotoAds';

@Entity('ads')
class Ads {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  type: string;

  @Column('decimal')
  sale_price: number;

  @Column('decimal')
  rent_price: number;

  @Column()
  sale: boolean;

  @Column()
  rent: boolean;

  @Column()
  land_area: string;

  @Column()
  building_area: string;

  @Column()
  bedrooms: string;

  @Column()
  suite: string;

  @Column()
  restroom: string;

  @Column()
  garage: string;

  @Column()
  address: string;

  @Column()
  number: string;

  @Column()
  complements: string;

  @Column()
  district: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  zip: string;

  @ManyToOne(() => People)
  @JoinColumn({ name: 'id_people' })
  people: People;

  @OneToMany(() => PhotoAds, photo_ads => photo_ads.ads, {
    cascade: true,
  })
  photo_ads: PhotoAds[];

  @Column()
  service_area: boolean;

  @Column()
  closets_room: boolean;

  @Column()
  cabinets_kitchen: boolean;

  @Column()
  furnished: boolean;

  @Column()
  air_conditioning: boolean;

  @Column()
  grill: boolean;

  @Column()
  balcony: boolean;

  @Column()
  gym: boolean;

  @Column()
  pool: boolean;

  @Column()
  servant_room: boolean;

  @Column()
  gated_community: boolean;

  @Column()
  elevator: boolean;

  @Column()
  security: boolean;

  @Column()
  concierge: boolean;

  @Column()
  animals_allowed: boolean;

  @Column()
  condominium_gym: boolean;

  @Column()
  condominium_pool: boolean;

  @Column()
  party_room: boolean;

  @Column()
  exclusive: boolean;

  @Column()
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Ads;
