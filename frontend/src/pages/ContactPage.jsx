import ContactForm from '../components/ContactForm';
import SectionHeading from '../components/SectionHeading';

function ContactPage() {
  return (
    <section className="section-block">
      <div className="container contact-layout">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something meaningful together"
            description="I’d be happy to connect about projects, internships, learning opportunities, and collaborations."
          />

          <div className="contact-list">
            <a href="mailto:your-email@example.com">your-email@example.com</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn Profile
            </a>
            <a href="https://github.com/imgouravbiswas" target="_blank" rel="noreferrer">
              GitHub Profile
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default ContactPage;
