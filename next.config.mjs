/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
// Set DEPLOY_TARGET=pages when building for GitHub Pages (user/org site → no basePath needed).
// The repo `ritochababala.github.io` is a user site, so basePath stays empty.
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    trailingSlash: true,
    reactStrictMode: true,
};

export default nextConfig;
