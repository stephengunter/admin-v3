import { Boss, Dev } from '@/consts';

export const resolveUserFromClaims = (claims) => {
   return {
      id: claims.id,
      email: claims.sub,
      picture: claims.picture,
      name: claims.name,
      roles: claims.roles ? claims.roles.split(',') : []
   };
}

export const isBoss = (user) => {
   if(user.roles && user.roles.length) return user.roles.includes(Boss);
   return false;
}

export const isDev = (user) => {
   if(user.roles && user.roles.length) return user.roles.includes(Dev);
   return false;
}

export const isAdmin = (user) => {
   if(isDev(user)) return true;
   return isBoss(user);
}