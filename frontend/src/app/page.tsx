import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Credentials from '@/components/Credentials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <main id="main" tabIndex={-1}>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Education />
                <Projects />
                <Credentials />
                <Contact />
            </main>
            <Footer />
            <ScrollToTop />
        </>
    );
}
