export default interface UsuarioLogin{
    senha: string | number | readonly string[] | undefined;
    id: number;
    nome: string;
    usuario: string;
    foto: string;
    token: string;
}