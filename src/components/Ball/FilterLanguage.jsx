import classNames from "classnames";

const FilterLanguage = ({
  ballRespond,
  setArrRespond,
  setLanguage,
  setFlag,
  language,
}) => {
  const arrLanguage = Object.keys(ballRespond);
  return (
    <div className="filter-language">
      {arrLanguage.map((el, index) => {
        return (
          <button
            value={el}
            key={index}
            onClick={() => {
              setLanguage(el);
              setArrRespond(ballRespond[el]);
              setFlag(false);
            }}
            className={classNames({ active: language === el })}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
};

export default FilterLanguage;
