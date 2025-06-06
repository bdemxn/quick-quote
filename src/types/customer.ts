import { z } from "zod"

export const customerSchema = z.object({
	id: z.string().uuid(),
	userId: z.string().uuid(),
	name: z.string().min(1, "Name is required"),
	email: z.string().email("Invalid email address"),
	phone: z.string().optional(),
	address: z.string().optional(),
	isActive: z.boolean().default(true),
	createdAt: z.date().default(() => new Date()),
})

export type Customer = z.infer<typeof customerSchema>
