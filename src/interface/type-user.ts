export type User = {
  id: string;
  name: string;
  email: string;
  created_at: Date;
  token: number;
  tokenExpiresAt: Date | null;
};
