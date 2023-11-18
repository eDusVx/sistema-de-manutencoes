import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm'
import { ManutencaoModel } from './Manutencao.model'
import { DecimalTransformer } from './utils/DecimalTransformer.util'

@Entity()
export class SolucaoModel {
    @PrimaryColumn({ name: 'id', nullable: false })
    public id: number

    @Column({ name: 'descricao', nullable: false })
    public descricao: string

    @Column({
        name: 'gastos',
        nullable: false,
        type: 'decimal',
        precision: 20,
        scale: 2,
        transformer: new DecimalTransformer(),
    })
    public gastos: number

    @OneToMany(() => ManutencaoModel, (solucao) => solucao.solucao)
    manutencao: ManutencaoModel
}
