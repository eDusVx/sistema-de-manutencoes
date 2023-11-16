export interface SolucoesProps {
    descricao: string;
    gastos: number;
}
export declare class Solucoes {
    private id;
    private descricao;
    private gastos;
    private constructor();
    static create(props: SolucoesProps): Solucoes;
    static carregar(props: SolucoesProps, id: number): Solucoes;
    private setDescricao;
    private setGastos;
    getId(): number;
    getDescricao(): string;
    getGastos(): number;
}
