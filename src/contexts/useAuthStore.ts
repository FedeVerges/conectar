import { create } from 'zustand';

interface UserInfo {
  uid: string;
  email: string;
  displayName: string | null;
  token: string;
}

interface AuthState {
  user: UserInfo | null;
  token: string | null;
  setUser: (user: UserInfo) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  setUser: (user) => set({ user, token: user.token }),
  clearUser: () => set({ user: null, token: null }),
}));
