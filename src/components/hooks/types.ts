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
    id: number,
    Image: string,
    songlist: Song[]
}