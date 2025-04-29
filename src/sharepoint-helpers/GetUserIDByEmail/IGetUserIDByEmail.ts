import { ISharePointHelper } from "../ISharePointHelper";
/**
 * Request parameters for fetching a user by ID.
 */
interface IGetUserIDByEmail extends ISharePointHelper {
  /**
   * The ID of the user to retrieve from SharePoint.
   */
  email: string;
}

export type { IGetUserIDByEmail };
