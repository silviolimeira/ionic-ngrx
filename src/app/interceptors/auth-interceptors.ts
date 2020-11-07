import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { DataService } from "../services/data.service";
import { API_CONFIG } from "../config/api.config";
//import { StorageService } from "src/services/storage.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  //constructor(public storage: StorageService, public apiService: ApiService) {}
  constructor(public dataService: DataService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //let localUser = this.storage.getLocalUser();

    let n = API_CONFIG.baseURL.length;
    //let n = this.apiService.getApiUrl().length;
    //let requestToAPI = req.url.substring(0, n) === this.apiService.getApiUrl();
    let requestToAPI = req.url.substring(0, n) === API_CONFIG.baseURL;

    //if (localUser && requestToAPI) {
    if (requestToAPI) {
      const authReq = req.clone({
        setHeaders: {
          //Authorization: `Bearer ${localUser.token}`,
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJpYUBnbWFpbC5jb20iLCJleHAiOjQxOTU3MTg1MjJ9.V1h2KNPXUvVKyFP-4TlBMzJo8qdUfvtD1Cp2ocGl_LAo93KdPyxUp9ieM7-6vMLZ_N1ajG4hCL07F9TpRtpCww",
        },
      });
      return next.handle(authReq);
    }

    return next.handle(req);
  }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};
