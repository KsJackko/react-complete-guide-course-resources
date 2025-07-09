export default function Section({ Title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{Title}</h2>
      {children}
    </section>
  );
}
