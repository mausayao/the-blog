import { ErroMessage } from "@/components/ErrorMessage";

export default function NotFound() {
    return (
        <ErroMessage
            title={"Pagina não encontrada"}
            titleContent={"404"}
            content={
                " Erro 404 - A página que você está tentando acessar não existe neste site."
            }
        />
    );
}
