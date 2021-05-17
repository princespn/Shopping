export function jwtOptionsFactory(tokenService) {
    return {
        tokenGetter: () => {
            return tokenService.token;
        },
        allowedDomains: ['genericpedia.lamne.com', 'homescapes.lamne.com', 'hwarehouseapi.lamne.com'],
        skipWhenExpired: true,
        throwNoTokenError: false,
    };
}
