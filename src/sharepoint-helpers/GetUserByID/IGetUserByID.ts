import { ISharePointHelper } from "../ISharePointHelper";

/**
 * Parameters for the `getUserByID` function.
 */
interface IGetUserByID extends ISharePointHelper {
  /**
   * The ID of the user to retrieve from SharePoint.
   */
  id: string;
}

export type { IGetUserByID };
