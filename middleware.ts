import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

//Rutas protegidas
const protectedRoutes = ["/Profile", "/portafolio", "/Cuenta"];

export function middleware(request: NextRequest) {  
  /*Logica para la Autenticacion (Cookie)*/

  const token = request.cookies.get('tokenAuthorized')?.value;

  const { pathname } = request.nextUrl;
  if (
    protectedRoutes.some((route) => pathname.startsWith(route)) &&
    !token
  )
    return NextResponse.redirect(new URL("/SingIn", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/Profile/:path*", "/portafolio/:path*", "/cuenta/:path*"],
};
