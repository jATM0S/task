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

export function writeAllPosts(posts: LocalPost[]) {
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
  writeAllPosts(updatedAllPosts);
  return updatedAllPosts;
}

export function deleteLocalPost(id: string) {
  const all = readLocalPosts();
  const updated = all.filter((p) => p.id !== id);
  writeAllPosts(updated);
  return updated;
}

export function updateLocalPost(
  id: string,
  patch: Omit<LocalPost, "id" | "createdAt">
) {
  const all = readLocalPosts();
  const updated = all.map((post) =>
    post.id === id ? { ...post, ...patch } : post
  );
  writeAllPosts(updated);
  return updated;
}
