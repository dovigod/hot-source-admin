/** @type {import('next').NextConfig} */
import stylexPlugin from "@stylexjs/nextjs-plugin";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

export default stylexPlugin({
  filename: "stylex-bundle.css",
  rootDir: __dirname,
  useCSSLayers: true,
})(nextConfig);
