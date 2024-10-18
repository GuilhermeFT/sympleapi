import { Metadata } from "next";
import { WaitListForm } from "./form";

export const metadata: Metadata = {
  title: "SympleAPI - Wait List",
  description:
    "Estamos desenvolvendo uma funcionalidade incrível para o SympleAPI e queremos saber suas expectativas. Preencha o formulário abaixo e nos ajude a criar a melhor solução para você!",
  keywords: ["sympleapi", "cms", "api", "content management system"],
};

export default function Feedback() {
  return <WaitListForm />;
}
