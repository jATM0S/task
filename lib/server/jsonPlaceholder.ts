import apiClient from "@/lib/apiClient";

export type JsonPlaceholderUser = {
  id: number;
  name: string;
  email: string;
  company: { name: string };
};

const USERS_TAG = "users";

export async function fetchUsers(options?: { revalidate?: number }) {
  return apiClient.getJson<JsonPlaceholderUser[]>("/users", {
    revalidate: options?.revalidate ?? 60,
    tags: [USERS_TAG],
  });
}
