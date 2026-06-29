/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
// The repo `ritochabalala.github.io` matches the username, so it is served as a
// user site at https://ritochabalala.github.io/ — no basePath/assetPrefix needed.
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    trailingSlash: true,
    reactStrictMode: true,
};

export default nextConfig;
