import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.jsdelivr.net", pathname: "/**" },
      { protocol: "https", hostname: "upload.wikimedia.org", pathname: "/**" },
      { protocol: "https", hostname: "www.gstatic.com", pathname: "/**" },
      { protocol: "https", hostname: "www.mistral.ai", pathname: "/**" },
      { protocol: "https", hostname: "github.githubassets.com", pathname: "/**" },
      { protocol: "https", hostname: "assets.vercel.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
