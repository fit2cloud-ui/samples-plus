import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";
import userMock from "./user";
import userTokenMock from "./user-token";
import userManagementMock from "./user-management";

export const mockModules = [...userMock, ...userTokenMock, ...userManagementMock];

export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
