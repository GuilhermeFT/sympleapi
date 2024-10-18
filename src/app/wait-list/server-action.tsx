"use server";

import { leadSchema, registerLead } from "@/services/google/create";

export const saveLead = async (prevState: unknown, formData: FormData) => {
  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    expectations: formData.get("expectations") as string,
  };

  const parsedData = leadSchema.safeParse(data);

  if (parsedData.success) {
    await registerLead(parsedData.data);

    return {
      submitted: true,
    };
  }

  return {
    errors: parsedData.error.flatten().fieldErrors,
  };
};
