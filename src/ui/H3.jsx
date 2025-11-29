const H3 = ({ id, text }) => {
  return (
    <h3
      id={id}
      className="text-2xl font-bold text-gray-800 dark:text-indigo-100 mb-3 scroll-mt-24 flex items-center transition-colors duration-1000"
    >
      <span className="text-indigo-600 dark:text-indigo-400 mr-2 transition-colors duration-1000">
        #
      </span>
      {text}
    </h3>
  );
};

export default H3;
