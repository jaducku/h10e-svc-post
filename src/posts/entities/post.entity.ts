import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'
import { v4 as uuidv4} from 'uuid';

@Entity()
export class Post {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    content: string;

    constructor(){
        if(!this.id){
            this.id = uuidv4();
        }
    }
}
