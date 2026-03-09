import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OurVision from '@/components/OurVision';
import Services from '@/components/Services';
import Partnerships from '@/components/Partnerships';
import MissionValues from '@/components/MissionValues';
import Company from '@/components/Company';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <OurVision />
                <Services />
                <Partnerships />
                <MissionValues />
                <Company />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
