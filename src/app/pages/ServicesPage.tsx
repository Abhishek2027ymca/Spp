import { Services } from '../components/Services';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function ServicesPage() {
  return (
    <div className="pt-20">
      <Breadcrumbs />
      <Services />
    </div>
  );
}