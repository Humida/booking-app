import {Column,
        Entity,
        PrimaryGeneratedColumn,
        OneToOne,
        CreateDateColumn,
        UpdateDateColumn,
        JoinColumn} from 'typeorm'
import Room from '../rooms/room.entity'
import Address from './address.entity';

export enum HotelType{
    BASIC = 'basic',
    STANDARD = 'standard',
    PREMIUM = 'premium',
}
@Entity()
export default class Hotel{
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({nullable: true})
    public slug: string;

    @Column()
    public hotelName: string;

    @Column()
    public description: string;

    @Column({
        type: "enum",
        enum: HotelType,
        default: HotelType.STANDARD
    })
    hotelType: HotelType

    @Column("text",{array: true, nullable : true})
    public images:string[];

    @OneToOne(() => Address, {
        cascade: true,
        eager: true
    })
    @JoinColumn()
    public address: Address;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

}