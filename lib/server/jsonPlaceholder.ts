import apiClient from "@/lib/apiClient";

export type JsonPlaceholderUser = {
  id: number;
  name: string;
  email: string;
  company: { name: string };
};

export type JsonPlaceholderPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const USERS_TAG = "users";
const userPostsTag = (userId: string | number) => `users:${userId}:posts`;

export async function fetchUsers(options?: { revalidate?: number }) {
  return apiClient.getJson<JsonPlaceholderUser[]>("/users", {
    revalidate: options?.revalidate ?? 60,
    tags: [USERS_TAG],
  });
}

export async function fetchUserPosts(
  userId: string | number,
  options?: { revalidate?: number }
) {
  return apiClient.getJson<JsonPlaceholderPost[]>(`/posts?userId=${userId}`, {
    revalidate: options?.revalidate ?? 60,
    tags: [userPostsTag(userId)],
  });
}

export const tags = {
  USERS_TAG,
  userPostsTag,
};
