import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Protect everything under /dashboard
const isProtectedRoute = createRouteMatcher(/\/dashboard(.*)/);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    // Match everything except Next.js internals and static files
    '/((?!_next|.*\\.(?:ico|png|jpg|jpeg|svg|css|js)).*)',
    // Always run middleware for API routes
    '/(api|trpc)(.*)',
  ],
};
