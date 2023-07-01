module.exports = {
  preset: "ts-jest",
  collectCoverageFrom: [
    "./src/**/*.{ts}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
