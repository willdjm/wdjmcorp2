
import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Depoimentos } from "./components/Depoimentos";
import { Footer } from "./components/Footer";
import { Parcerias } from "./components/Parcerias";
import { ScrollTop } from "./components/ScrollToTopp";
import { Whatsapp } from "./components/Whatsapp";

export default function Home() {
  return (
    <main>
<Banner/>
<About/>
{/* <Parcerias/> */}
<Depoimentos/>
<Contact/>
      <Footer />
      <Whatsapp />
      <ScrollTop />
    </main>
  );
}
