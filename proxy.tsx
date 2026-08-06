import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { tokenVerify } from './utiles/tokenVerify'
 const AUTH_ROUTE=['/login','/register']
 const PUBLIC_ROUTES=["/about","/contact","/properties","/",'/login','/register']
export async function proxy(request: NextRequest) {
    const pathname=request.nextUrl.pathname
    //  const cookiStore=await cookies()
     const accessToken=request.cookies.get("accessToken")?.value
     const role=await tokenVerify()
     if(accessToken&& AUTH_ROUTE.includes(pathname)){
        if(role==="TENANT"){
            return NextResponse.redirect(new URL('/tenant/dashboard', request.url))
        }
        if(role==="ADMIN"){
            return NextResponse.redirect(new URL('/admin/dashboard', request.url))
        }
        if(role==="LANDLORD"){
            return NextResponse.redirect(new URL('/landlord/dashboard', request.url))
        }
     }
     const isPublic=PUBLIC_ROUTES.some(route=>route===pathname||pathname.startsWith(route + "/"))
     console.log(isPublic)
     if(!accessToken && !isPublic){
        return NextResponse.redirect(new URL('/login', request.url))
     }

     if(pathname.startsWith("/tenant/dashboard")&&role!=="TENANT"){
         return NextResponse.redirect(new URL('/not-found', request.url))
     }else if(pathname.startsWith("/admin/dashboard")&&role!=="ADMIN"){
        return NextResponse.redirect(new URL('/not-found', request.url))
     }else if(pathname.startsWith("/landlord/dashboard")&&role!=="LANDLORD"){
        return NextResponse.redirect(new URL('/not-found', request.url))
     }
    return NextResponse.next()
//   return NextResponse.redirect(new URL('/', request.url))
}
 
export const config = {
  matcher: '/((?!api|_next/static|_next/image|.*\\.png$).*)',
}