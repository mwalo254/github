import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../profile.service';
import { Profile, Repo } from '../../interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class profilecomponent implements OnInit {
  profile: Profile;
  repos: Repo[];
  username:string;

  constructor(private profileService: ProfileService) {}
   
  findProfile() {
    this.profileService.updateProfile(this.username)
    
    this.profileService.getProfileInfo()
      .subscribe((profile: any) => {
        this.profile = profile.json()
      });

    this.profileService.getProfileRepos()
      .subscribe((repos: any) => {
        this.repos = repos.json()
      })
  }

  ngOnInit() {}
}