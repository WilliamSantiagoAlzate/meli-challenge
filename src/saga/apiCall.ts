import axios, { Method } from "axios";

export const apiCall = async (
  url: string,
  method: Method | undefined
): Promise<any> => {
  return await axios({ method, url }).then(response => response.data);
}