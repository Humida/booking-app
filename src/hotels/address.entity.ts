import { string } from '@hapi/joi';
import {Entity, Column, PrimaryGeneratedColumn, OneToOne} from 'typeorm'
import Hotel from './hotel.entity';


@Entity()
export default class Address{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    streetAddress: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    zipcode: number;

    @Column()
    country: string;
}