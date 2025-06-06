import { PUBLIC_DODO_PAYMENTS_BEARER_TOKEN } from "$env/static/public";
import DodoPayments from "dodopayments";

export const clientPayments = new DodoPayments({
	bearerToken: PUBLIC_DODO_PAYMENTS_BEARER_TOKEN,
	environment: "test_mode",
});
