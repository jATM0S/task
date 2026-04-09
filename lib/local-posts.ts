export type LocalPost = {
  id: string;
  title: string;
  body: string;
  createdAt: number;
};

const STORAGE_KEY = "myPosts";

export function readLocalPosts(): LocalPost[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    const parsedData = JSON.parse(data);
    if (!Array.isArray(parsedData)) return [];
    return (parsedData as LocalPost[]).sort(
      (a, b) => b.createdAt - a.createdAt
    );
  } catch {
    return [];
  }
}

export function UpdateAllPosts(posts: LocalPost[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function addLocalPost(post: Omit<LocalPost, "id" | "createdAt">) {
  const newPost: LocalPost = {
    id: crypto.randomUUID(),
    createdAt: Date.now(),
    ...post,
  };

  const all = readLocalPosts();
  const updatedAllPosts = [newPost, ...all];
  UpdateAllPosts(updatedAllPosts);
  return updatedAllPosts;
}
