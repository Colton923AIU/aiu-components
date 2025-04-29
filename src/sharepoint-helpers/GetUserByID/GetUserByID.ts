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

const GetUserByID = async ({
  id,
  baseUrl,
  fetcher,
}: IGetUserByIDRefactored): Promise<any | null> => {
  const listUrl = `${baseUrl}_api/web/getUserById(${id})`;

  try {
    const response = await fetcher(listUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }

    const data = await response.json();
    return data || null;
  } catch (error) {
    console.error("Response from SP List Getter Failed", error);
    return null;
  }
};

export { GetUserByID };
export type { IGetUserByIDRefactored };
