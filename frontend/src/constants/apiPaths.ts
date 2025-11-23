export const API_PATHS = {
    AUTH: {
        CHECK_AUTH: 'auth/check-auth',
        LOGIN: '/auth/login',
        SIGNUP: '/auth/signup',
        LOGOUT: '/auth/logout'
    },
    HERO: {
        GET_HERO: '/hero/',
        EDIT_HERO: (heroId: string) => `/hero/${heroId}`
    },
    TECH: {
        GET_TECH: '/technology/',
        ADD_TECH: '/technology/',
        DELETE_TECH: (techId: string) => `/technology/${techId}`,
        EDIT_TECH: (techId: string) => `/technology/${techId}`
    }
}