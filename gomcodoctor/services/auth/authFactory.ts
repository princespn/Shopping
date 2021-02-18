import {AuthLoader, AuthStaticLoader} from '@gomcodoctor/services/auth/index';

export function authFactory(defaultUrl: string = ''): AuthLoader {
    return new AuthStaticLoader({
        backend: {
            endpoint: '',
            params: []
        },
        storage: '',
        storageKey: 'currentUser',
        loginRoute: ['login'],
        defaultUrl
    });
}
