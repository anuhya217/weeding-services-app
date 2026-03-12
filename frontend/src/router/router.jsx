import { createRouter, createRoute, createRootRoute, Outlet } from "@tanstack/react-router"
import Home from "../pages/Home"
import Vendors from "../pages/Vendors"

const rootRoute = createRootRoute({
  component: () => (
    <div>
      <Outlet />
    </div>
  ),
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
})

const vendorsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/vendors",
  component: Vendors,
})

const routeTree = rootRoute.addChildren([
  homeRoute,
  vendorsRoute,
])

export const router = createRouter({
  routeTree,
})