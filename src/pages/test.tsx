import { createPlaylist } from "@/lib/api";
import { useUser } from "@/lib/hooks/useUser"
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";

export default function test(){
  const { user, retry } = useUser();
  const router = useRouter();
  
  const form = useForm({
    initialValues: {
      name:"",
      image: "",
    },
    validate: {},
  });

  console.log(user?.id)

    return(
        <div className="bg-black min-h-[84vh] h-auto">
            <div>
                <form 
                              onSubmit={form.onSubmit((values) => {
                                const { name, image } = values;
                
                                createPlaylist( name, image, user!.id)
                                  .then((res) => res.json())
                                  .then((res) => {
                                    if (res.updatedUser) {
                                      retry();
                                      router.push("/dashboard");                
                                    }
                                  });
                              })}
                
                >
                        <input type="text" {...form.getInputProps("name")} />
                        <input type="text" {...form.getInputProps("image")} />
                    <button type="submit">submit</button>
                </form>
            </div>
        </div>
    )
}