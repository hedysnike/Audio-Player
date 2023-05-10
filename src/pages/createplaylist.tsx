import { Layout } from "@/components/Layout";
import { createPlaylist } from "@/lib/api";
import { useUser } from "@/lib/hooks/useUser";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";

export default function () {
  const { user, retry } = useUser();
  const router = useRouter();

  const form = useForm({
    initialValues: {
      name: "",
      image: "",
    },
    validate: {},
  });

  return (
    <>
      <Layout>
        <div className="bg-black min-h-[84vh] h-auto">
          <form
            onSubmit={form.onSubmit((values) => {
              const { name, image } = values;

              createPlaylist(name, image, user!.id)
                .then((res) => res.json())
                .then((res) => {
                  if (res.updatedUser) {
                    retry();
                    router.push("/dashboard");
                  }
                });
            })}
          >
            <h1 className="text-white text-2xl pt-20 text-center">
                Create Playlist
            </h1>
            <div className="flex flex-col pt-5">
            <div className="flex gap-5 py-7 items-center justify-center text-white">
            <h2>
                Playlist Name
            </h2> 
            <input className="bg-[#2b2b2b] py-1.5 px-2 rounded outline-none border-white" type="text" {...form.getInputProps("name")} />
            </div>
            <div className="flex gap-5 py-3 items-center justify-center text-white">
            <h2>
            Image
            </h2>
            <input className="bg-[#2b2b2b] py-1.5 px-2 rounded outline-none border-white" {...form.getInputProps("image")} />
            </div>
            </div>
            <div className="flex items-center justify-center w-full">
            <button type="submit" className="px-5 py-1.5 rounded text-white bg-[#2c1564]">Create</button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
}
