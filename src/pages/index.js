import Banner from "@/components/Banner";
import Choose from "@/components/Choose";
import Clients from "@/components/Clients";
import ContactForm from "@/components/ContactForm";
import Features from "@/components/Features";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Methodology from "@/components/Methodology";
import MissionVission from "@/components/MissionVission";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";
import WebDevelopment from "@/components/WebDevelopment";
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
      <MissionVission />
      <Service />
      <Methodology />
      <Feedback />
      <Features />
      <Testimonial />
      <Clients />
      <ContactForm />
      <Footer />
    </div>
  );
}
