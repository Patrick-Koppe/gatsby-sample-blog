export const imports = {
  'src/pages/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-index" */ 'src/pages/index.mdx'
    ),
  'src/pages/blog/2019-06-10-Google-Tag-Manager.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-blog-2019-06-10-google-tag-manager" */ 'src/pages/blog/2019-06-10-Google-Tag-Manager.md'
    ),
  'src/pages/blog/2019-06-10-ipsum.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-blog-2019-06-10-ipsum" */ 'src/pages/blog/2019-06-10-ipsum.md'
    ),
  'src/pages/blog/2019-06-10-lorem.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-blog-2019-06-10-lorem" */ 'src/pages/blog/2019-06-10-lorem.md'
    ),
  'src/pages/blog/2019-06-10-loremipsum.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-blog-2019-06-10-loremipsum" */ 'src/pages/blog/2019-06-10-loremipsum.md'
    ),
  'src/pages/blog/2019-06-17-Sistrix.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-blog-2019-06-17-sistrix" */ 'src/pages/blog/2019-06-17-Sistrix.md'
    ),
  'src/pages/blog/2019-06-17-loremipsum2.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-blog-2019-06-17-loremipsum2" */ 'src/pages/blog/2019-06-17-loremipsum2.md'
    ),
}
