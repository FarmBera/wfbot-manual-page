const A = ({ text, href }) => {
  return (
    <a
      className="text-blue-600 dark:text-blue-400 font-bold underline hover:text-cyan-400 dark:hover:text-cyan-100 transition-colors duration-1000"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};

export default A;
