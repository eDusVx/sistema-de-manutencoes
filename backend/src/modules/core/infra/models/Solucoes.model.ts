import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm'
import { ManutencoesModel } from './Manutencoes.model'
import { DecimalTransformer } from './utils/DecimalTransformer.util'

@Entity()
export class SolucoesModel {
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

    @OneToMany(() => ManutencoesModel, (solucao) => solucao.solucoes, {})
    manutencoes: ManutencoesModel
}
