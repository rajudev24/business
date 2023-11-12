import Banner from "@/components/Banner";
import Choose from "@/components/Choose";
import Feedback from "@/components/Feedback";
import Header from "@/components/Header";
import Service from "@/components/Service";
import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title> This is Home page </title>
        <meta
          name="description"
          content="This is Landing page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Banner />
      <Service />
      <Choose />
      <Feedback />
    </div>
  );
}
