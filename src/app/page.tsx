import { Metadata } from "next";
import Link from "next/link";

export const metaData: Metadata = {
  title: "SympleAPI",
  description:
    "Simplifique Sua Gestão de Conteúdo com o SympleAPI: Inscreva-se Agora!",
  keywords: ["sympleapi", "cms", "api", "content management system"],
};

export default function HomePage() {
  return (
    <main className="text-center bg-gradient-to-b from-neutral-900 to-neutral-950 py-20 min-h-screen">
      <section className="container bg-cover bg-center flex  justify-center relative">
        <div className="relative flex gap-6 items-center flex-col z-10 p-10 rounded-xl ">
          <h1 className="text-6xl font-league-spartan font-medium text-neutral-200">
            Simplifique Sua Gestão de Conteúdo com o SympleAPI: Inscreva-se
            Agora!
          </h1>
        </div>
      </section>

      <section className="container bg-cover bg-center flex justify-center relative">
        <div className="relative flex gap-6 flex-col z-10 p-10 rounded-xl ">
          <h2 className="text-4xl font-league-spartan font-medium text-neutral-200">
            Por que criamos o SympleAPI?
          </h2>

          <p className="text-justify text-pretty text-2xl text-neutral-300 font-light">
            A ideia do SympleAPI surgiu da necessidade de oferecer uma
            plataforma simples, flexível e minimalista para desenvolvedores.
            Atualmente, as opções disponíveis como Strapi e Prismic podem ser
            complexas e excessivas, quando o que muitos devs precisam é de uma
            solução rápida e prática. O SympleAPI oferece a liberdade de criar
            rotas personalizadas e gerenciar conteúdos de forma descomplicada.
          </p>
        </div>
      </section>

      <section className="container bg-cover bg-center flex justify-center relative">
        <div className="relative flex gap-6 flex-col z-10 p-10 rounded-xl ">
          <h2 className="text-4xl font-league-spartan font-medium text-neutral-200">
            Com o SympleAPI, você terá:
          </h2>

          <ul className="text-justify text-pretty text-2xl text-neutral-300 font-light max-w-screen-lg">
            <li className="list-disc">
              Uma plataforma que permite a criação de rotas personalizadas com
              apenas alguns cliques.
            </li>
            <li className="list-disc">
              Interface intuitiva e minimalista para que o foco seja no
              desenvolvimento, não na gestão.
            </li>
            <li className="list-disc">
              Ferramentas poderosas para gerenciar conteúdos de maneira rápida e
              eficiente, sem necessidade de configurações complexas.
            </li>
          </ul>
          <Link
            href="/wait-list"
            className="uppercase w-max mx-auto inline-block bg-gradient-to-r from-neutral-50 to-neutral-300 text-black py-3 px-8 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Fiquei interessado!
          </Link>
        </div>
      </section>

      <section className="container bg-cover bg-center flex justify-center relative">
        <div className="relative flex gap-6 flex-col z-10 p-10 rounded-xl ">
          <h2 className="text-4xl font-league-spartan font-medium text-neutral-200">
            O que esperar?
          </h2>

          <p className="text-justify text-pretty text-2xl text-neutral-300 font-light">
            O SympleAPI não é apenas mais um sistema de gerenciamento de
            conteúdo. Ele foi desenvolvido para quem deseja agilidade e
            simplicidade. Nossa solução se adapta ao seu fluxo de trabalho,
            permitindo que você configure rotas, gerencie conteúdos e tenha
            total controle, tudo em poucos passos.
          </p>
        </div>
      </section>

      <section className="container bg-cover bg-center flex justify-center relative">
        <div className="relative flex gap-6 flex-col z-10 p-10 rounded-xl ">
          <h2 className="text-4xl font-league-spartan font-medium text-neutral-200">
            Disponibilidade
          </h2>

          <p className="text-justify text-pretty text-2xl text-neutral-300 font-light">
            Estamos na fase final de desenvolvimento e em breve lançaremos o
            SympleAPI! Inscreva-se agora para ser o primeiro a receber
            atualizações e garantir uma oferta especial no lançamento.
          </p>
          <Link
            href="/wait-list"
            className="uppercase w-max mx-auto inline-block bg-gradient-to-r from-neutral-50 to-neutral-300 text-black py-3 px-8 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Me inscrever agora!
          </Link>
        </div>
      </section>
    </main>
  );
}
