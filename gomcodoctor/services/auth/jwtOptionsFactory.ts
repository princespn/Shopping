export function jwtOptionsFactory(tokenService) {
    return {
        tokenGetter: () => {
            return tokenService.token;
        },
        allowedDomains: ['genericpedia.lamne.com', 'mpconnectorapi.centcorner.com'],
        skipWhenExpired: true,
        throwNoTokenError: false,
    };
}
