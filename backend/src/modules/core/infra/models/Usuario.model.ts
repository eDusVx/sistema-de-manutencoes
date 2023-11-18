import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm'
import { CarroModel } from './Carro.model'

@Entity()
export class UsuariosModel {
    @PrimaryColumn({ name: 'cpf', nullable: false })
    public id: string

    @Column({ name: 'nome', nullable: false })
    public nome: string

    @Column({ name: 'email', nullable: false })
    public email: string

    @Column({ name: 'senha', nullable: false })
    public senha: string

    @OneToMany(() => CarroModel, (carro) => carro.usuario, {
        nullable: true,
    })
    carro: CarroModel
}
