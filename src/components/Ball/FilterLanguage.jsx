import classNames from "classnames";

const FilterLanguage = ({
  ballRespond,
  setArrRespond,
  setLanguage,
  setActiveBtn,
  activeBtn,
  setFlag,
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
              setActiveBtn(el);
              setArrRespond(ballRespond[el]);
              setFlag(false);
            }}
            className={classNames({ active: activeBtn === el })}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
};

export default FilterLanguage;
