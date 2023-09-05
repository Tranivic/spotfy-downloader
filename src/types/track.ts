export interface trackDownloadResponse {
  link: string;
  title: string;
  progress: number;
  duration: number;
  status: string | boolean;
  msg: string;
}


export interface downloadTrackObjInterface{
  trackName: string,
  trackId: string,
}