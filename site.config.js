module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '0447f14b7ab749db944b13f770911e5f',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Zack Lee',
  domain: 'wenquai.com',
  author: 'Zack Lee',

  // open graph metadata (optional)
  description: "Zack's Blog",
  socialImageTitle: 'Zack Lee',
  socialImageSubtitle: '👋',

  // social usernames (optional)
  twitter: 'wenquai',
  github: 'zckly',
  linkedin: 'zckly',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    '/vinovest': 'fb2020bc7f0845a9b501ec86592d2021',
    '/indeed': 'd077ba638b3f48d396d5e77387e2e77c',
    '/potion-pages': '25e6590cf4d54efd9e8e4bd9345bfac3',
    '/fitz': '9de95bd66f2e403c8a8a30c197fa3f12',
    '/svelte-before-react': 'adfb73b0770141c198ea675635b6c837'
  }
}
