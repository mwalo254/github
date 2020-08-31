export interface Profile {
  name: string;
  login: string;
  company: string;
  location: string;
  bio: string;
  hireable: string;
  blog: string;
  email: string;
  followers: string;
  following: string;
  public_gists: string;
  public_repos: string
  html_url: string;
  avatar_url: string;
}

export interface Repo {
  name: string
  url: string
}