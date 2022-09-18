import { IsOptional } from 'class-validator';
import {Entity,
        Column,
        PrimaryGeneratedColumn,
        CreateDateColumn,
        UpdateDateColumn} from 'typeorm'

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
    public fullName: string;

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

    @CreateDateColumn({nullable: true})
    createAt: Date;

    @UpdateDateColumn({nullable: true})
    updateAt: Date;
}