

export default function Songslists() {
  const Songs = [
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
        <div className="w-11/12">
          <div className="text-black   flex justify-center ">wtf bitchez</div>
          <div className="grid grid-cols-4">
            {Songs.map((i) => (
              <div key={i.id}>
                {i.name}
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }