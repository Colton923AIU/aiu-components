import * as React from "react";

// Type for the list data (key-value pairs from SharePoint List)
export type TSPListData = Record<string, string>;

// Add a fetcher type
type Fetcher = (url: string, options?: RequestInit) => Promise<Response>;

interface UseSharePointListDataProps {
  baseUrl: string;
  listName: string;
  fetcher: Fetcher;
}

export function useSharePointListData({ baseUrl, listName, fetcher }: UseSharePointListDataProps) {
  const [data, setData] = React.useState<TSPListData | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    setLoading(true);
    setError(null);
    const url = `${baseUrl}_api/web/lists/getbytitle('${listName}')/items`;
    fetcher(url)
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch list data');
        return response.json();
      })
      .then((json) => {
        setData(json.value || null);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [baseUrl, listName, fetcher]);

  return { data, loading, error };
}
