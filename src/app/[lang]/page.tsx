import type { Metadata } from 'next';
import { getDictionary } from '@/dictionaries/get-dictionary';
import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';
import EducationSection from '@/components/education-section';
import ExpertiseSection from '@/components/tools-sections';
import HeroSection from '@/components/hero-section';
import Navbar from '@/components/navbar';
import ProjectsSection from '@/components/projects-section';
import SiteFooter from '@/components/site-footer';

interface PageProps {
  params: Promise<{ lang: 'pt' | 'en' }>;
}

export async function generateStaticParams() {
  return [{ lang: 'pt' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const copyright = dict.footer.copyright.replace(
    '{year}',
    String(new Date().getFullYear()),
  );

  return (
    <>
      <Navbar lang={lang} dict={dict.nav} />

      <main>
        <HeroSection dict={dict.hero} />
        <ProjectsSection dict={dict.projects} />
        <AboutSection dict={dict.about} />
        <ExpertiseSection dict={dict.expertise} />
        <EducationSection dict={dict.education} />
        <ContactSection dict={dict.contact} />
      </main>

      <SiteFooter dict={{ ...dict.footer, copyright }} nav={dict.nav} />
    </>
  );
}
