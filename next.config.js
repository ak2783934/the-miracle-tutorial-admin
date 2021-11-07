module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    REACT_APP_AUTH0_DOMAIN: process.env.REACT_APP_AUTH0_DOMAIN,
    REACT_APP_AUTH0_CLIENT_ID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  },
};
