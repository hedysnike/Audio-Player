export interface Song {
    id: number,
    name: string,
    artist: string,
    Image: string,
    number: string,
    URL: string
}

export interface Playlist {
    name: string,
    subtitle?: string,
    id: number,
    Image: string,
    songlist: Song[]
    songlist2?: Song[]
}