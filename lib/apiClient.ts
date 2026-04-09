export type ApiCacheOptions = {
  revalidate?: number;
  tags?: string[];
};

class ApiClient {
  private static instance: ApiClient | null = null;
  private baseUrl: string;

  private constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";
  }

  static getInstance() {
    if (!ApiClient.instance) ApiClient.instance = new ApiClient();
    return ApiClient.instance;
  }

  async getJson<T>(path: string, options?: ApiCacheOptions): Promise<T> {
    const url = `${this.baseUrl}${path}`;

    const res = await fetch(url, {
      next:
        options?.revalidate || options?.tags?.length
          ? {
              revalidate: options?.revalidate,
              tags: options?.tags,
            }
          : undefined,
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch ${url} (status ${res.status})`);
    }

    return (await res.json()) as T;
  }
}

const apiClient = ApiClient.getInstance();
export default apiClient;
