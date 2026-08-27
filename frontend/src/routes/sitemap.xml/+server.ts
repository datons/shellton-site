const routes = ['', '/compare/moshi', '/compare/termius', '/compare/blink', '/privacy', '/support'];

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((route) => `<url><loc>https://shellton.app${route || '/'}</loc></url>`).join('')}</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
