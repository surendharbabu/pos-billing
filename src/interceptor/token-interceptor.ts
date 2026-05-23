import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const token: string = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTcmluYXRoIiwidXNlcklkIjoxLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE3NzkzNDIwOTMsImV4cCI6MTc4MDM0MjA5Mn0.R6E5VtRWXXzxjHhNyK5X-vBdgRIuwOijm-HLNPC2awY'

  if (token) {
    const clonedreq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    return next(clonedreq)

  }
  return next(req);
};



