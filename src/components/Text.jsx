export default function StyledP({ className, children, text }) {
  return (
    <>
      <div className={`flex items-center text-zinc-400 ${className}`}>
        {children}
        <p>{text}</p>
      </div>
    </>
  );
}
