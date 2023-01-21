import { Layout } from "../components/Layout";
import { GetServerSideProps } from "next";
import { DesktopHome } from "../components/desktopindex";
import MobileHome from "../components/mobileindex";
import { MobileLayout } from "../components/mobilecomponents/defaultcomponents/MobileLayout";

export default function Home({ isMobile }: { isMobile: boolean }) {
  console.log(isMobile);

  return (
    <>
      {isMobile ? (
        <MobileLayout>
          <MobileHome />
        </MobileLayout>
      ) : (
        <Layout>
          <DesktopHome />
        </Layout>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isMobile = context.req.headers["user-agent"]?.includes("Mobile");
  console.log(isMobile);

  return {
    props: {
      isMobile,
    },
  };
};
