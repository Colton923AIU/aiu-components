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

const GetUserIDByEmail = async ({
  fetcher,
  email,
  baseUrl,
}: IGetUserIDByEmailRefactored): Promise<{ id: string } | null> => {
  const listUrl = `${baseUrl}_api/web/siteusers?$filter=Email eq '${email}'`;

  try {
    const response = await fetcher(listUrl);

    if (!response.ok) {
      throw new Error(`Error fetching user: ${response.statusText}`);
    }

    const data = await response.json();

    // Ensure correct data structure based on expected SharePoint response
    if (data?.value?.length > 0) {
      const user = data.value[0];
      return { id: user.Id.toString() };
    }

    return null;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    return null;
  }
};

export { GetUserIDByEmail };
export type { IGetUserIDByEmailRefactored };
