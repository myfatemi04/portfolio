module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  browser: {
    "fs/promises": false,
    "./lib/parseProject": false,
  },
};
