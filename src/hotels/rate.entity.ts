// import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm'
// import Hotel from './hotel.entity'
// import User from '../users/user.entity'


// @Entity()
// export default class Rate{
//     @PrimaryGeneratedColumn()
//     public id: string;

//     @Column()
//     public numStar: number;

//     @Column()
//     public content: string;

//     @ManyToOne(()=> User, (user: User)=> user.rates)
//     public user: User;
    
//     @Column({ type: 'timestamptz' })
//     createAt: Date;

// }