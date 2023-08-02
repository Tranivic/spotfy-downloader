export interface FormState {
  formData: {
    url: {
      value: string;
      id: string;
      isValid: boolean;
    };
  };
  spotifyPlaylistRegex: RegExp;
}
