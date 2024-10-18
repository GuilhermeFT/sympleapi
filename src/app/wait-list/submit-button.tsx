import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="w-full uppercase bg-gradient-to-r from-neutral-100 to-neutral-300 text-black py-3 px-8 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg disabled:opacity-50"
    >
      {pending ? "Enviando..." : "Enviar"}
    </button>
  );
};
