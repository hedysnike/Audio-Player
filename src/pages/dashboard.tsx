import { Layout } from "@/components/Layout";
import { Avatar } from "@mantine/core";

export default function Dashboard() {
  return (
    <Layout>
      <div className="bg-black min-h-[84vh] h-auto">
        <div className="text-white flex flex-col items-center justify-center">
            <div className="py-12">
                <Avatar size={"xl"}/>
            </div>
      
      <div>dashboard</div>
        
        </div>
      </div>
    </Layout>
  );
}
