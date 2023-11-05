// To parse this data:
import axios, { AxiosResponse } from "axios";

export interface Image {
  // bot: number;
  // copyright: string;
  // copyrightlink: string;
  // drk: number;
  // enddate: string;
  // fullstartdate: string;
  // hs: any[];
  // hsh: string;
  // quiz: string;
  // startdate: string;
  // title: string;
  // top: number;
  // url: string;
  // urlbase: string;
  // wp: boolean;
  url: string;
  wallpaper: string;
  downloadable: boolean;
  locales:{
    zh:{
      title:string;
      description:string;
      headline:string;
      copyright:string;
      backstage:string;
      quickFact:string;
    }
    en:{
      title:string;
      description:string;
      headline:string;
      copyright:string;
      backstage:string;
      quickFact:string;
    }
  }
}

// Converts JSON strings to/from your types
export class BingApi {
  public static request(): Promise<AxiosResponse<Image[]>> {
    return axios.get<Image[]>(
      "https://bing-wallpaper.vuejs.press/api/wallpaper"
    );
  }
}
