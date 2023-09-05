export default interface trackDownloadResponse {
  link: string;
  title: string;
  progress: number;
  duration: number;
  status: string | boolean;
  msg: string;
}

