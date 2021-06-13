import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/setup-tests.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
};
export default config;
