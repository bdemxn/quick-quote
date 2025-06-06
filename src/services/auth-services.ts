import { supabase } from "$lib";
import type { Provider } from "@supabase/supabase-js";
import { AuthContext } from "../context/auth-context";

export class AuthServices {
	async signInWithEmail(email: string, password: string) {
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			throw new Error(`Sign in failed: ${error.message}`);
		}

		AuthContext.setIsAuthenticated(true);
		AuthContext.setUserId(data.user.id);
		AuthContext.setUsername(data.user.user_metadata?.username || null);
	}

	async signUpWithEmail(email: string, password: string) {
		const { data, error } = await supabase.auth.signUp({
			email,
			password,
		});

		if (error) {
			throw new Error(`Sign up failed: ${error.message}`);
		}

		AuthContext.setIsAuthenticated(true);
		return data;
	}

	async signInWithOAuth(provider: Provider) {
		const { error } = await supabase.auth.signInWithOAuth({ provider });

		if (error) {
			throw new Error(`OAuth sign in failed: ${error.message}`);
		}

		AuthContext.setIsAuthenticated(true);
	}

	async signOut() {
		const { error } = await supabase.auth.signOut();
		if (error) {
			throw new Error(`Sign out failed: ${error.message}`);
		}

		AuthContext.setIsAuthenticated(false);
		AuthContext.setUserId(null);
		AuthContext.setUsername(null);
	}

	async getUser() {
		const { data, error } = await supabase.auth.getUser();

		if (error) {
			throw new Error(`Get user failed: ${error.message}`);
		}

		return data;
	}
}
