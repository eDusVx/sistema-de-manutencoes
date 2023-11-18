import {
    Entity,
    Column,
    PrimaryColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm'

import { UsuariosModel } from './Usuario.model'
import { ManutencaoModel } from './Manutencao.model'

@Entity()
export class CarroModel {
    @PrimaryColumn({ name: 'id', nullable: false })
    public id: string

    @Column({ name: 'marca', nullable: false })
    public marca: string

    @Column({ name: 'modelo', nullable: false })
    public modelo: string

    @Column({ name: 'ano', nullable: false })
    public ano: string

    @ManyToOne(() => UsuariosModel, (usuario) => usuario.carro)
    @JoinColumn({ name: 'usuario_id', referencedColumnName: 'id' })
    usuario: UsuariosModel

    @OneToMany(() => ManutencaoModel, (manutencao) => manutencao.carro)
    manutencoes: ManutencaoModel[]
}
