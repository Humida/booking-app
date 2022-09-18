
import {Column, PrimaryColumn, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm'
import Room from '../rooms/room.entity'
import Address from '../address/address.entity'


enum HotelType{
    BASIC = 'basic',
    STANDARD = 'standard',
    PREMIUM = 'premium',
}

@Entity()
export default class Hotel{
    @PrimaryGeneratedColumn()
    public id: number;

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
}