import { NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages, cookieName } from './app/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
  matcher: [
    '/((?!api|static|_next/static|_next/image|assets|favicon.ico|sw.js).*)',
  ],
}

export function middleware(req) {
  console.log('Request received:', req.url)

  let lng

  // Retrieve language from cookies
  if (req.cookies.has(cookieName)) {
    lng = acceptLanguage.get(req.cookies.get(cookieName).value)
    console.log('Language from cookie:', lng)
  }

  // Fallback to language from the Accept-Language header
  if (!lng) {
    lng = acceptLanguage.get(req.headers.get('Accept-Language'))
    console.log('Language from Accept-Language header:', lng)
  }

  // Fallback to the default language
  if (!lng) {
    lng = fallbackLng
    console.log('Fallback language:', lng)
  }

  // Redirect if language in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    console.log('Redirecting to:', `/${lng}${req.nextUrl.pathname}`)
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url),
    )
  }

  // Handle referer for setting the cookie
  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer'))
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`),
    )
    const response = NextResponse.next()
    if (lngInReferer) {
      response.cookies.set(cookieName, lngInReferer, { sameSite: 'lax' })
      console.log('Setting cookie from referer:', lngInReferer)
    }
    return response
  }

  return NextResponse.next()
}
