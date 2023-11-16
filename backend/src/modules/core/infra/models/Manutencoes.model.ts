import {
    Entity,
    Column,
    PrimaryColumn,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
} from 'typeorm'
import { CarrosModel } from './Carros.model'
import { SolucoesModel } from './Solucoes.model'

@Entity()
export class ManutencoesModel {
    @PrimaryColumn({ name: 'id', nullable: false })
    public id: number

    @Column({ name: 'descricao', nullable: false })
    public descricao: string

    @Column({
        nullable: false,
        name: 'data',
    })
    public data: string

    @ManyToOne(() => CarrosModel)
    carro: CarrosModel

    @ManyToOne(() => SolucoesModel)
    @JoinColumn({ name: 'solucoes_id', referencedColumnName: 'id' })
    solucoes: SolucoesModel
}
