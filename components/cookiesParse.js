import cookie from 'cookie';

export function cookiesParse(req) {
    
    return cookie.get(req ? req.headers.cookie || '' : document.cookie);
}

//cookie.parse(req ? req.headers.cookie : undefined);