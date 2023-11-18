import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'
import { CarroModel } from './Carro.model'
import { SolucaoModel } from './Solucao.model'

@Entity()
export class ManutencaoModel {
    @PrimaryColumn({ name: 'id', nullable: false })
    public id: number

    @Column({ name: 'problema', nullable: false })
    public problema: string

    @Column({
        nullable: false,
        name: 'data',
    })
    public data: string

    @ManyToOne(() => CarroModel)
    carro: CarroModel

    @ManyToOne(() => SolucaoModel)
    @JoinColumn({ name: 'solucao_id', referencedColumnName: 'id' })
    solucao: SolucaoModel
}
