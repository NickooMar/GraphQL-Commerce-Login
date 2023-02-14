import Commerce from "@chec/commerce.js";

export const commerce = new Commerce(import.meta.env.VITE_CHEC_API_KEY, true);