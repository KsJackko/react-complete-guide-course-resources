import { CORE_CONCEPTS } from '../data';
import CoreConcept from './CoreConcepts/CoreConcept';

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((each) => (
          <CoreConcept key={each.title} {...each} />
        ))}
      </ul>
    </section>
  );
}
