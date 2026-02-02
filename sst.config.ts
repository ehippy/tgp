/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "tgp",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    // Deploy static site with S3 and CloudFront
    const site = new sst.aws.StaticSite("Site", {
      path: "public",
      domain: "thegeekpad.com",
    });

    return {
      url: site.url,
    };
  },
});
