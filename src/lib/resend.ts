import { PUBLIC_RESEND_API_KEY } from "$env/static/public";
import { Resend } from "resend";

export const resend = new Resend(PUBLIC_RESEND_API_KEY);
