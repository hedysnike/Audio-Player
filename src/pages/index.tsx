import { Layout } from "../components/Layout";
import { GetServerSideProps } from "next";
import { DesktopHome } from "../components/desktopindex";
import MobileHome from "../components/mobileindex";

export default function Home({ isMobile }: { isMobile: boolean }) {

  return (
    <>
      {isMobile ? (
        <Layout>
          <MobileHome />
        </Layout>
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

  return {
    props: {
      isMobile,
    },
  };
};
