const config = JSON.parse(fs.readFileSync(`${__dirname}/.swcrc`, "utf-8"));

module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      { ...config /* custom configuration in Jest */ },
    ],
  },
  setupFiles: ["./test/jest-setup.js"], // opcional
  moduleNameMapper: {
    "^.+\\.(css|scss)$": "identity-obj-proxy",
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["<rootDir>/support/setupTests.js"],
};
