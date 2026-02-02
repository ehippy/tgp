# The Geek Pad

A static website deployed to S3 and served via CloudFront using [SST](https://sst.dev).

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure your AWS credentials:
```bash
aws configure
```

3. Configure Cloudflare DNS (if using Cloudflare):
   - Set the `CLOUDFLARE_API_TOKEN` environment variable
   - Or follow SST's DNS setup instructions for your provider

## Development

Run the development server:
```bash
npm run dev
```

## Deployment

Deploy to production:
```bash
npm run deploy --stage production
```

Deploy to a different stage:
```bash
npm run deploy --stage dev
```

## Domain Configuration

The site is configured to use `thegeekpad.com` in the [sst.config.ts](sst.config.ts). Make sure:
- Your domain is configured in your DNS provider
- You have the appropriate credentials set up (Cloudflare API token, Route53, etc.)

## Remove

To remove all resources:
```bash
npm run remove --stage <stage-name>
```

## Project Structure

```
├── public/
│   └── index.html      # Your HTML page
├── sst.config.ts       # SST configuration
└── package.json        # Dependencies
```