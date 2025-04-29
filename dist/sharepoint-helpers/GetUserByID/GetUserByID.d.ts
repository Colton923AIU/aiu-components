import { IGetUserByID } from "./IGetUserByID";
/**
 * Fetches a user from SharePoint by their ID using the SharePoint REST API.
 *
 * @param params - An object containing the user ID, base URL, and fetcher function.
 * @returns A promise resolving to the user data (object) or `null` if not found or on error.
 */
type Fetcher = (url: string, options?: RequestInit) => Promise<Response>;
interface IGetUserByIDRefactored extends Omit<IGetUserByID, 'spHttpClient'> {
    fetcher: Fetcher;
}
declare const GetUserByID: ({ id, baseUrl, fetcher, }: IGetUserByIDRefactored) => Promise<any | null>;
export { GetUserByID };
export type { IGetUserByIDRefactored };
//# sourceMappingURL=GetUserByID.d.ts.map