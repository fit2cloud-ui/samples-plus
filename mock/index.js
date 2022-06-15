import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";
import userMock from "./user";
// import echartsMock from "../mock/echarts";
// import asyncRoutesMock from "../mock/asyncRoutes";

export const mockModules = [...userMock];

export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
