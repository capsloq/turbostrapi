import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./src",
});

const config: Config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
  ],
};

export default createJestConfig(config);
