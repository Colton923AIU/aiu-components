/**
 * Common type for REST API request parameters.
 */
export interface ISharePointHelper {
    /**
     * The base URL of the SharePoint site, e.g., "https://example.sharepoint.com/sites/mysite/"
     */
    baseUrl: string;
    /**
     * A fetcher function for making REST API calls.
     */
    fetcher: (url: string, options?: RequestInit) => Promise<Response>;
}
//# sourceMappingURL=ISharePointHelper.d.ts.map