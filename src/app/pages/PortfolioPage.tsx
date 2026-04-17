import { Portfolio } from '../components/Portfolio';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function PortfolioPage() {
  return (
    <div className="pt-20">
      <Breadcrumbs />
      <Portfolio />
    </div>
  );
}