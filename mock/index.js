import {createProdMockServer} from "vite-plugin-mock/es/createProdMockServer";
import userMock from "./user";
import userManagementMock from "./user-management";

export const mockModules = [...userMock, ...userManagementMock];

export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
