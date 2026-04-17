import { About } from '../components/About';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function AboutPage() {
  return (
    <div className="pt-20">
      <Breadcrumbs />
      <About />
    </div>
  );
}