import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Ads from './Ads';

@Entity('photos_ads')
class PhotoAds {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  photo: string;

  @ManyToMany(() => Ads, ads => ads.photo_ads)
  @JoinColumn({ name: 'id' })
  ads: Ads;

  @Column()
  id_ads: string;

  @Column()
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default PhotoAds;
