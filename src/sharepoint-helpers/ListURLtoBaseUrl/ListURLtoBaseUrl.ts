/**
 * Converts the URL from a SharePoint List to the Base URL required by this package's components.
 *
 * @param url - A string representing the SharePoint List i.e. localhost.sharepoint.com/subsite/lists/listname.aspx
 * @returns A string representing the correct Base URL for this package.
 */

import { IListURLtoBaseUrl } from "./IListURLtoBaseUrl";

const ListURLtoBaseUrl: IListURLtoBaseUrl = (url: string) => {
  const parsed = url;
  const parts = parsed.split("/")[parsed.split("/").indexOf("Lists") + 1];
  if (!parts) return undefined;
  return parts.replace(/%20/g, " ").split("?")[0];
};

export { ListURLtoBaseUrl };
