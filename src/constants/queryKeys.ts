export const queryKeys =
{
  products:
  {
    all: () => ["products"] as const,
    lists: () => ["products", "list"] as const,
    list: (filters?: string) => ["products", "list", filters ?? "all"] as const,
    details: () => ["products", "detail"] as const,
    detail: (id: number) => ["products", "detail", id] as const,
  }
}