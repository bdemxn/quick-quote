export interface AuthContext {
	isAuthenticated: boolean;
	userId: string | null;
	username: string | null;
	setIsAuthenticated: (value: boolean) => void;
	setUserId: (value: string | null) => void;
	setUsername: (value: string | null) => void;
}
