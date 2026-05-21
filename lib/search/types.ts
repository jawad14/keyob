export type SearchResult = {
  title: string;
  url: string;
  excerpt?: string;
};

export interface Search {
  query(q: string, limit?: number): Promise<SearchResult[]>;
}
