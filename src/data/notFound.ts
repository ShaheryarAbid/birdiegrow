// Content for the 404 page (src/pages/404.astro). The heading is plain text: the page adds the green period with gd().

export const NOT_FOUND = {
  meta: {
    title: 'Page not found | Birdie',
    description: "The page you were looking for doesn't exist.",
  },
  heading: "We couldn't find that page",
  body: 'The link may be broken or the page may have moved.',
  link: { text: 'Back to home', href: '/' },
};
