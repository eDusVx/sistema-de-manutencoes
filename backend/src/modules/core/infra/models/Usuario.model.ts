import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm'
import { CarrosModel } from './Carros.model'

@Entity()
export class UsuariosModel {
    @PrimaryColumn({ name: 'Cpf', nullable: false })
    public id: string

    @Column({ name: 'nome', nullable: false })
    public nome: string

    @Column({ name: 'email', nullable: false })
    public email: string

    @Column({ name: 'senha', nullable: false })
    public senha: string

    @OneToMany(() => CarrosModel, (carro) => carro.usuario, {
        nullable: true,
    })
    carros: CarrosModel
}
