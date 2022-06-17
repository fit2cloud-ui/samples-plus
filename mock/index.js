import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";
import userMock from "./user";
import userTokenMock from "./user-token";

export const mockModules = [...userMock, ...userTokenMock];

export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
