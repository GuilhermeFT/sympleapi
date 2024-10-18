"use client";

import { useFormState } from "react-dom";
import { saveLead } from "./server-action";
import { SubmitButton } from "./submit-button";

export const WaitListForm = () => {
  const [state, formAction] = useFormState(saveLead, null);

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-neutral-900 to-neutral-950 p-6">
      <section className="bg-neutral-800/40 backdrop-blur-md shadow-md rounded-lg p-8 w-full max-w-2xl min-h-[43rem] flex flex-col">
        {!state?.submitted ? (
          <>
            <h1 className="mx-auto text-center text-4xl font-bold text-neutral-200 mb-6">
              Estamos Trabalhando em Uma Solução!
            </h1>
            <p className="text-2xl text-neutral-300 mb-8 text-center  text-pretty font-light">
              Estamos desenvolvendo uma funcionalidade incrível para o SympleAPI
              e queremos saber suas expectativas. Preencha o formulário abaixo e
              nos ajude a criar a melhor solução para você!
            </p>

            <form action={formAction} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-neutral-300"
                >
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 text-lg border border-neutral-600 bg-neutral-900 text-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />

                {state?.errors?.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {state.errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-neutral-300"
                >
                  Seu E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full text-lg px-3 py-2 border border-neutral-600 bg-neutral-900 text-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />

                {state?.errors?.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {state.errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="expectations"
                  className="block text-lg font-medium text-neutral-300"
                >
                  O que você espera dessa funcionalidade?
                </label>
                <textarea
                  id="expectations"
                  name="expectations"
                  rows={4}
                  className="mt-1 block text-lg w-full px-3 py-2 border border-neutral-600 bg-neutral-900 text-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
                ></textarea>

                {state?.errors?.expectations && (
                  <p className="text-red-500 text-sm mt-1">
                    {state.errors.expectations}
                  </p>
                )}
              </div>

              <SubmitButton />
            </form>
          </>
        ) : (
          <div className="text-center my-auto">
            <h2 className="text-3xl font-bold text-neutral-200 mb-6">
              Obrigado pelo seu feedback!
            </h2>
            <p className="text-lg text-neutral-300">
              Nós recebemos suas informações e usaremos suas expectativas para
              melhorar nossa solução. Acompanhe as novidades!
            </p>
          </div>
        )}
      </section>
    </main>
  );
};
