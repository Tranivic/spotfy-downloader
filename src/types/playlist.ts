export default interface Track {
  type: "track";
  id: string;
  name: string;
  shareUrl: string;
  addedAt: string;
  durationMs: number;
  durationText: string;
  discNumber: number;
  trackNumber: number;
  album: {
    type: "album";
    id: string;
    name: string;
    shareUrl: string;
    date: string;
    artists: Array<Artist>;
    cover: Array<Cover>;
    trackCount: number;
  };
}

interface Episode {
  type: "episode";
  id: string;
  name: string;
  shareUrl: string;
  durationMs: number;
  durationText: string;
  podcast: {
    type: "show";
    id: string;
    name: string;
    shareUrl: string;
    cover: Array<Cover>;
  };
  playlist: {
    addedAt: string;
    addedBy: {
      type: string;
      id: string;
      shareUrl: string;
    };
  };
}

interface Artist {
  type: "artist";
  id: string;
  name: string;
  shareUrl: string;
}

interface Cover {
  height: number;
  url: string;
  width: number;
}
export default interface PlaylistObject {
  items: [];
  tolCount: number;
}
export default interface ResponseData {
  status: boolean;
  contents: {
    totalCount: number;
    items: Array<Track | Episode>;
  };
}
