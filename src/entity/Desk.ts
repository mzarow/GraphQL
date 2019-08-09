import { Field, Int, ID, ObjectType } from 'type-graphql';
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Room } from './Room';
import { User } from './User';

@Entity()
@ObjectType()
export class Desk {

    @Field(type => ID)
    @PrimaryGeneratedColumn()
    public readonly id: number;

    @Column()
    @Field(type => Int)
    public internalId: number;

    @ManyToOne(type => Room, room => room.desks, { nullable: false })
    public room: Room;

    @OneToOne(type => User, user => user.desk)
    public user: User;
}
