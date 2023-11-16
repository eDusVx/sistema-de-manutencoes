import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm'
import { ManutencoesModel } from './Manutencoes.model'

@Entity()
export class SolucoesModel {
    @PrimaryColumn({ name: 'id', nullable: false })
    public id: number

    @Column({ name: 'descricao', nullable: false })
    public descricao: string

    @Column({ name: 'gastos', nullable: false })
    public gastos: number

    @OneToMany(() => ManutencoesModel, (solucao) => solucao.solucoes, {})
    manutencoes: ManutencoesModel
}
