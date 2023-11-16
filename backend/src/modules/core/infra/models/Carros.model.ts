import {
    Entity,
    Column,
    PrimaryColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm'

import { UsuariosModel } from './Usuario.model'
import { ManutencoesModel } from './Manutencoes.model'

@Entity()
export class CarrosModel {
    @PrimaryColumn({ name: 'id', nullable: false })
    public id: number

    @Column({ name: 'marca', nullable: false })
    public marca: string

    @Column({ name: 'modelo', nullable: false })
    public modelo: string

    @Column({ name: 'ano', nullable: false })
    public ano: string

    @ManyToOne(() => UsuariosModel, (usuario) => usuario.carros)
    @JoinColumn({ name: 'usuario_id', referencedColumnName: 'id' })
    usuario: UsuariosModel

    @OneToMany(() => ManutencoesModel, (manutencao) => manutencao.carro)
    manutencoes: ManutencoesModel[]
}
