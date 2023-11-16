export interface UsuarioProps {
    nome: string;
    email: string;
    senha: string;
}
export declare class Usuario {
    private cpf;
    private nome;
    private email;
    private senha;
    private constructor();
    static create(props: UsuarioProps, cpf: string): Usuario;
    private setNome;
    private setEmail;
    private setSenha;
    getCPF(): string;
    getNome(): string;
    getEmail(): string;
    getSenha(): string;
}
