import { z } from "zod";
import { getAuthenticatedSheet } from "./auth";

export const leadSchema = z.object({
  name: z
    .string({
      required_error: "Nome é obrigatório",
    })
    .min(3, {
      message: "Nome deve ter no mínimo 3 caracteres",
    }),
  email: z
    .string({
      required_error: "Email é obrigatório",
    })
    .email({
      message: "Email inválido",
    }),
  expectations: z
    .string({
      required_error: "Expectativas são obrigatórias",
    })
    .min(3, {
      message: "Expectativas devem ter no mínimo 3 caracteres",
    }),
});

export type Lead = z.infer<typeof leadSchema>;

export const registerLead = async (data: Lead) => {
  const sheet = await getAuthenticatedSheet();

  sheet.spreadsheets.values.append({
    spreadsheetId: process.env.SHEET_ID,
    range: "A1:D1",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [data.name, data.email, data.expectations, new Date().toISOString()],
      ],
    },
  });
};
