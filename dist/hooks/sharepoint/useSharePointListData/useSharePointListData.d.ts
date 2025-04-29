export type TSPListData = Record<string, string>;
type Fetcher = (url: string, options?: RequestInit) => Promise<Response>;
interface UseSharePointListDataProps {
    baseUrl: string;
    listName: string;
    fetcher: Fetcher;
}
export declare function useSharePointListData({ baseUrl, listName, fetcher }: UseSharePointListDataProps): {
    data: TSPListData | null;
    loading: boolean;
    error: Error | null;
};
export {};
//# sourceMappingURL=useSharePointListData.d.ts.map