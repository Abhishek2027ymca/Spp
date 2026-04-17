import { Contact } from '../components/Contact';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function ContactPage() {
  return (
    <div className="pt-20">
      <Breadcrumbs />
      <Contact />
    </div>
  );
}