import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(public http: HttpClient) {}

  getListActivity(closed: boolean) {
    return this.http.get<any>(
      //`${API_CONFIG.baseURL}/activities/pageClosed?closed=${closed}`
      `${API_CONFIG.baseURL}/activities/pageClosed?closed=${closed}`
    );
  }

  getParticipants(activityId: String) {
    console.log(`${API_CONFIG.baseURL}/activities/${activityId}/participants`);
    return this.http.get<any[]>(
      `${API_CONFIG.baseURL}/activities/${activityId}/participants`
    );
  }

  getActivity(id: String) {
    return this.http.get<any[]>(`${API_CONFIG.baseURL}/activities/${id}`);
  }
}
