

export default function Playlists() {
  const Playlists = [
    {
        name: "Playlist 1",
        id: "1",
    },
    {
        name: "Playlist 2",
        id: "2",
    },
]
  
    return (
    <>
      <div>
        <div className="grid grid-cols-4 text-white">
          {Playlists.map((i) => (
            <div key={i.id} >
              {i.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}