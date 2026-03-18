import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { isAuthenticated } from "./app/Utils/Auth";

//Rutas protegidas
const protectedRoutes = ["/Profile", "/portafolio", "cuenta"];

export function middleware(request: NextRequest) {  
  /*Logica para la Autenticacion (Cookie)*/

  const { pathname } = request.nextUrl;
  if (
    protectedRoutes.some((route) => pathname.startsWith(route)) &&
    !isAuthenticated
  )
    return NextResponse.redirect(new URL("/", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/Profile/:path*", "/portafolio/:path*", "/cuenta/:path*"],
};
