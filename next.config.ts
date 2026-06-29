import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
  basePath: "/abdullah",
  assetPrefix: "/abdullah/",
  trailingSlash: true,
};

export default nextConfig;
