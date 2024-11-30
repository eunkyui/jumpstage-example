export type DynamicRoute = {
  jobs: {
    id: string
  }
  returnship: {
    id: string
  }
}

declare module 'next' {
  interface RouteImpl {
    jobs: string
    returnship: string
    community: string
    profile: string
    verify: string
    terms: string
    privacy: string
    'forgot-password': string
  }
}