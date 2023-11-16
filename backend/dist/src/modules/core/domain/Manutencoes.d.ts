import { Solucoes } from './Solucoes';
export interface ManutencoesProps {
    descricao: string;
    solucoes: Solucoes;
    data: Date;
}
export declare class Manutencoes {
    private id;
    private descricao;
    private solucoes;
    private data;
    private constructor();
    static create(props: ManutencoesProps): Manutencoes;
    static carregar(props: ManutencoesProps, id: number): Manutencoes;
    private setDescricao;
    private setSolucoes;
    private setData;
    getId(): number;
    getDescricao(): string;
    getSolucoes(): Solucoes;
    getData(): Date;
}
