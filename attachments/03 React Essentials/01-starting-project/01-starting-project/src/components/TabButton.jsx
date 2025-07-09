export default function TabButton({ children, selected, ...porps }) {
  return (
    <li>
      <button className={selected ? 'active' : ''} {...porps}>
        {children}
      </button>
    </li>
  );
}
