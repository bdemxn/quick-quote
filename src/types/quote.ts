import { z } from "zod"
import { stockSchema } from "./stock"

export const quoteSchema = z.object({
	id: z.string().uuid(),
	userId: z.string().uuid(),
	articles: z.array(stockSchema).min(1, "At least one article is required"),
	totalPrice: z.number().min(0, "Total price must be a positive number"),
	status: z.enum(["pending", "accepted", "rejected"]).default("pending"),
	createdAt: z.date().default(() => new Date()),
	updatedAt: z.date().default(() => new Date()),
})

export type Quote = z.infer<typeof quoteSchema>
