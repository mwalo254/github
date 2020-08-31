import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable()
export class ProfileService {
  private username:string;
  private clientid = '019f192e0661f3dc5c0e';
  private clientsecret = '3ec30472792b413d3dc6210b4536e90a998d9eff';

  constructor(private http: Http) {
    console.log("services is now ready!");
    this.username = 'mwalo254';
  }

  getProfileInfo() {
    //  Define the URI.
    const uri = `https://api.github.com/users/${this.username}?client_id=${this.clientid}&client_secret=${this.clientsecret}`
    
    // Make the request.
    const res = this.http.get(uri)

    // Return the result.
    return res
  }
   
  getProfileRepos() {
    //  Define the URI.
    const uri = `https://api.github.com/users/${this.username}/repos?client_id=${this.clientid}&client_secret=${this.clientsecret}`
    
    // Make the request.
    const res = this.http.get(uri)
    
    // Return the result.
    return res
  }
  
  updateProfile(username:string) {
    this.username = username;
  }
}