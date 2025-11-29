const A = ({ text, href }) => {
  return (
    <a className="text-blue-600 font-bold underline hover:text-cyan-400" href={href} target="_blank" rel="noreferrer" >
      {text}
    </a>
  );
};

export default A;
