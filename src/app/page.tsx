
import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollTop } from "./components/ScrollToTopp";
import { Whatsapp } from "./components/Whatsapp";

export default function Home() {
  return (
    <main>
<Banner/>
<About/>
<Contact/>
      <Footer />
      <Whatsapp />
      <ScrollTop />
    </main>
  );
}
