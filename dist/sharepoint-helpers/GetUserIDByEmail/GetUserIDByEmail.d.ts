import { IGetUserIDByEmail } from "./IGetUserIDByEmail";
/**
 * Fetches a user's SharePoint ID by email using the SharePoint REST API.
 *
 * @param params - An object containing the fetcher, user email, and base URL.
 * @returns A promise resolving to an object containing the user ID or `null` if not found.
 */
type Fetcher = (url: string, options?: RequestInit) => Promise<Response>;
interface IGetUserIDByEmailRefactored extends Omit<IGetUserIDByEmail, 'spHttpClient'> {
    fetcher: Fetcher;
}
declare const GetUserIDByEmail: ({ fetcher, email, baseUrl, }: IGetUserIDByEmailRefactored) => Promise<{
    id: string;
} | null>;
export { GetUserIDByEmail };
export type { IGetUserIDByEmailRefactored };
//# sourceMappingURL=GetUserIDByEmail.d.ts.map