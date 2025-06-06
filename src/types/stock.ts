import { z } from "zod"

export const stockSchema = z.object({
	id: z.string().uuid(),
	userId: z.string().uuid(),
	name: z.string().min(1, "Name is required"),
	price: z.number().min(0, "Price must be a positive number"),
	isActive: z.boolean().default(true),
	createdAt: z.date().default(() => new Date()),
})

export type Stock = z.infer<typeof stockSchema>
