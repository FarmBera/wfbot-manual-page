import DocLink from "../components/DocLink";

const UL_LINK_GRID = ({ content }) => {
  return (
    // <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-600">
    <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600 mb-8 transition-colors duration-1000">
      {/* <p className="text-gray-600">클릭하면 해당 명령어 가이드로 이동합니다.</p> */}
      {/* <h4 className="font-semibold text-gray-700 mb-2">클릭하면 해당 명령어 가이드로 이동합니다.</h4> */}
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-base text-gray-600 dark:text-gray-200 transition-colors duration-1000">
        {content.map((cmd) => (
          <li key={cmd.id}>
            <DocLink to={cmd.id}>{cmd.title}</DocLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UL_LINK_GRID;
