module.exports = {
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/setup-tests.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
};
