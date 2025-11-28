const H3 = ({ id, text }) => {
  return (
    <h3
      id={id}
      className="text-2xl font-bold text-gray-800 mb-3 scroll-mt-24 flex items-center"
    >
      <span className="text-indigo-600 mr-2">#</span>
      {text}
    </h3>
  );
};

export default H3;
