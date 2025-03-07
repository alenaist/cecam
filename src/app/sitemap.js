export default function sitemap() {
  const baseUrl = 'https://cecam.com.ar';
  
  // Páginas principales del sitio
  const routes = [
    '',
    '/archives',
    '/schedule',
    '/contact',
    '/about',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
} 