import Banner from "@/components/Banner";
import Choose from "@/components/Choose";
import Feedback from "@/components/Feedback";
import Header from "@/components/Header";
import Service from "@/components/Service";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Service />
      <Choose />
      <Feedback />
    </div>
  );
}
