import { writable } from 'svelte/store';
import type { AuthContext as AuthContextType } from '../types/auth';

function createAuthContext() {
	const { subscribe, update, set } = writable<AuthContextType>({
		isAuthenticated: false,
		userId: null,
		username: null,
		setIsAuthenticated: () => {},
		setUserId: () => {},
		setUsername: () => {},
	});

	return {
		subscribe,
		setIsAuthenticated: (value: boolean) => {
			update((ctx) => ({ ...ctx, isAuthenticated: value }));
		},
		setUserId: (value: string | null) => {
			update((ctx) => ({ ...ctx, userId: value }));
		},
		setUsername: (value: string | null) => {
			update((ctx) => ({ ...ctx, username: value }));
		}
	};
}

export const AuthContext = createAuthContext();

export function useAuthContext() {
	return AuthContext;
}