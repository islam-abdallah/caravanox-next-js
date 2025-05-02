import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './i18n.config';
import acceptLanguage from 'accept-language';

acceptLanguage.languages(Array.from(i18n.locales));

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)',
  ],
};

export function middleware(request: NextRequest) {
  let locale;
  
  // Check for locale in cookie
  const localeCookie = request.cookies.get('NEXT_LOCALE');
  if (localeCookie) {
    locale = localeCookie.value;
  } else {
    // Get locale from Accept-Language header
    const acceptLang = request.headers.get('Accept-Language');
    locale = acceptLang ? acceptLanguage.get(acceptLang) : i18n.defaultLocale;
  }

  // Ensure locale is valid
  if (!i18n.locales.includes(locale as any)) {
    locale = i18n.defaultLocale;
  }

  const pathname = request.nextUrl.pathname;

  // Skip public files and static assets
  if (
    pathname.includes('.') || 
    pathname.startsWith('/_next/') ||
    pathname.includes('/api/')
  ) {
    return NextResponse.next();
  }

  // Check if the pathname starts with a locale
  const pathnameIsMissingLocale = i18n.locales.every(
    loc => !pathname.startsWith(`/${loc}/`) && pathname !== `/${loc}`
  );

  if (pathnameIsMissingLocale) {
    // Redirect to the same pathname with locale prefix
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? pathname : `/${pathname}`}`,
        request.url
      )
    );
  }

  return NextResponse.next();
}