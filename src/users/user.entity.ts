import { IsOptional } from 'class-validator';
import {Entity,
        Column,
        PrimaryGeneratedColumn,
        OneToOne,
        JoinColumn,
        PrimaryColumn,
        OneToMany,
        CreateDateColumn,
        UpdateDateColumn} from 'typeorm'
// import Rate from '../hotels/rate.entity'

export enum UserRole{
    ADMIN =  'admin',
    USER = 'user',
    HOTELSUPPLIER = 'hotelsupplier'
}

@Entity()
export default class User{
    @PrimaryGeneratedColumn("uuid")
    public id: number;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

    @Column({unique: true})
    public userName: string;

    @Column({unique: true})
    public email: string;

    @IsOptional()
    @Column({unique: true, nullable: true})
    public phoneNumber?: string;
    
    @Column()
    public password?: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.USER,
        nullable: true
    })
    userRole?: UserRole

    @Column({nullable: true})
    public isActive?: boolean;

    // @OneToMany(()=>  Rate, (rate)=> rate.user)
    // rates: Rate[]

    // @PrimaryColumn()
    // addressId?: number

    @CreateDateColumn({nullable: true})
    createAt: Date;

    @UpdateDateColumn({nullable: true})
    updateAt: Date;
}