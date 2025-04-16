import Hero from '@/sections/Hero';
import Problem from '@/sections/ProblemSection';
import Solution from '@/sections/Solution';
import Traction from '@/sections/Traction';
import CTA from '@/sections/CTA';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/sections/Back2top';
export default function Home() {
  return (
    <>
    <main className='className="bg-blue-50 dark:bg-gray-900 text-gray-900 dark:text-white pt-20 scroll-smooth"'>
      <Navbar />
      <Hero />
      <Problem />
      <Solution/>
      <Traction/>
      <CTA/>
      <Footer />
    </main>
    <BackToTop />
    </>
  );
}
