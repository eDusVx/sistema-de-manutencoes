import { Manutencoes } from './Manutencoes';
import { Usuario } from './Usuario';
export interface CarrosProps {
    marca: string;
    modelo: string;
    ano: string;
    usuario: Usuario;
    manutencoes: Manutencoes[];
}
export declare class Carros {
    private id;
    private marca;
    private modelo;
    private ano;
    private usuario;
    private manutencoes;
    private constructor();
    static create(props: CarrosProps): Carros;
    static carregar(props: CarrosProps, id: number): Carros;
    private setMarca;
    private setModelo;
    private setAno;
    private setUsuario;
    private setManutencoes;
    registrarManutencao(manutencoes: Manutencoes): void;
    getId(): number;
    getMarca(): string;
    getModelo(): string;
    getAno(): string;
    getUsuario(): Usuario;
    getManutencoes(): Manutencoes[];
}
