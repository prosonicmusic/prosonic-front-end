import { useEffect, useRef, useState } from "react";

import { BiRefresh } from "react-icons/bi";

export default function Filter({ router, productType, pageName, filtersData }) {
  const [dawsFilter, setDawsFilter] = useState("");
  const [genresFilter, setGenresFilter] = useState("");
  const [typesFilter, setTypesFilter] = useState("");
  const [sold, setSold] = useState(true);

  const [showDawOptions, setShowDawOptions] = useState(false);
  const [showGenresOptions, setShowGenresOptions] = useState(false);
  const [showTypesOptions, setShowTypesOptions] = useState(false);

  const genresMenuRef = useRef(null);
  const dawsMenuRef = useRef(null);
  const typesMenuRef = useRef(null);

  // Event listener to close menu when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const { current: genresMenu } = genresMenuRef;
      const { current: dawsMenu } = dawsMenuRef;
      const { current: typesMenu } = typesMenuRef;

      if (genresMenu && !genresMenu.contains(event.target)) {
        setShowGenresOptions(false);
      }
      if (dawsMenu && !dawsMenu.contains(event.target)) {
        setShowDawOptions(false);
      }
      if (typesMenu && !typesMenu.contains(event.target)) {
        setShowTypesOptions(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const sortHandler = (filterType, sort) => {
    switch (filterType) {
      case "daw":
        setDawsFilter(sort);
        return {
          daw: sort.name,
        };
      case "genre":
        setGenresFilter(sort);
        return {
          genre: sort.name,
        };
      case "type":
        setTypesFilter(sort);
        return {
          package_type: sort.name,
        };
      default:
        return {};
    }
  };

  const handleFilterChange = (filterType, sort) => {
    const newQuery = {
      ...router.query,
      page: 1,
      ...sortHandler(filterType, sort),
    };
    router.push({
      pathname: router.pathname,
      query: newQuery,
    });
  };

  const soldHandler = () => {
    setSold(!sold);
    const newQuery = {
      ...router.query,
      sold: !sold,
      page: 1,
    };
    router.push({
      pathname: router.pathname,
      query: newQuery,
    });
  };

  const caretStyles =
    "absolute right-2 top-[10px] border-l-4 border-l-[transparent] border-r-4 border-r-[transparent] border-t-4 border-t-[#5a626b]";
  const resetStyles =
    "h-6 w-6 cursor-pointer bg-[#2a2c33] rounded-lg hover:fill-white transition duration-200 max-[460px]:hidden";
  const resetStyles2 =
    "h-6 w-6 mt-4 bg-[#2a2c33] rounded-lg hover:fill-white transition duration-200 hidden max-[460px]:block";
  const filtersStyles =
    "z-30 py-[4px] text-[11px] rounded-lg bg-[#23252b] transition duration-300 hover:bg-[#2a2d34] text-[#bcc7d4] cursor-pointer";

  return (
    <div className="h-full w-full m-auto max-w-5xl px-5 flex max-md:block justify-between items-end my-5">
      <h1 className="font-medium max-[767.5px]:pb-5 max-[900px]:text-center text-2xl">
        {pageName}
      </h1>

      {/* Filters */}
      <div className="flex items-center justify-center">
        {/* Prices */}
        <div className="mr-3 relative">
          {/* <select className="py-[4px] px-2 text-[11px] rounded-lg transition duration-300 bg-[#23252b] text-[#bcc7d4] border-none outline-none">
            <option value="">Prices</option>
            <option value="0,99">Up to 99€</option>
            <option value="100,199">100€ to 199€</option>
            <option value="200,299">200€ to 299€</option>
            <option value="300,499">300€ to 399€</option>
            <option value="500,99999">More than 500€</option>
          </select>
          <span className="caret"></span> */}
        </div>

        {/* Sold */}
        <div
          onChange={soldHandler}
          className="mr-3 z-30 py-[4px] px-4 text-[11px] rounded-lg bg-[#23252b] transition duration-300 text-[#bcc7d4] flex items-center"
        >
          <div>Show Sold</div>
          <input
            onChange={soldHandler}
            type="checkbox"
            checked={sold}
            className="w-[13px] h-[13px] ml-2 border border-[#535968] appearance-none rounded cursor-pointer bg-[#33363f] checked:bg-[#4bd9fd] checked:border-[#30333b]"
          />
        </div>

        {/* Genres */}
        {productType == "track" && (
          <div className="mr-3 relative" ref={genresMenuRef}>
            <ul
              role="menu"
              onClick={() => setShowGenresOptions(!showGenresOptions)}
              className={filtersStyles}
            >
              <div className="flex mx-6">
                <li className="relative -left-3">
                  {router.asPath == "/tracks" ? "Genres" : genresFilter.name || "Genres"}
                </li>
                <span className={caretStyles}></span>
              </div>

              {showGenresOptions && (
                <div className="absolute w-[85px] bg-[#23252b] left-0 z-30 rounded-lg mt-2">
                  {filtersData?.genres?.map((sort) => {
                    return (
                      <li
                        role="menuitem"
                        key={sort.id}
                        onClick={() => handleFilterChange("genre", sort)}
                        className="px-2 py-[2px] hover:bg-[#33363f] rounded-lg transition duration-200"
                      >
                        {sort.name}
                      </li>
                    );
                  })}
                </div>
              )}
            </ul>
          </div>
        )}

        {/* Daws */}
        {productType == "track" && (
          <div className="mr-3 relative" ref={dawsMenuRef}>
            <ul
              role="menu"
              onClick={() => setShowDawOptions(!showDawOptions)}
              className={filtersStyles}
            >
              <div className="flex mx-6">
                <li className="relative -left-3">
                  {router.asPath == "/tracks"
                    ? "Daws"
                    : (dawsFilter.name == "flstudio" && "FL Studio") ||
                      (dawsFilter.name === "cubase" && "Cubase") ||
                      (dawsFilter.name === "logicpro" && "Logic Pro") ||
                      (dawsFilter.name === "ableton" && "Ableton") ||
                      (dawsFilter.name === "studioone" && "Studio One") ||
                      (dawsFilter.name === "protools" && "Pro Tools") ||
                      "Daws"}
                </li>
                <span className={caretStyles}></span>
              </div>

              {showDawOptions && (
                <div className="absolute w-[75px] h-[11.3em] bg-[#23252b] left-0 z-30 rounded-lg mt-2">
                  {filtersData?.daws?.map((sort) => {
                    return (
                      <li
                        role="menuitem"
                        key={sort.id}
                        onClick={() => handleFilterChange("daw", sort)}
                        className="px-2 py-[2px] hover:bg-[#33363f] rounded-lg transition duration-200"
                      >
                        {sort.name === "flstudio" && "FL Studio"}
                        {sort.name === "cubase" && "Cubase"}
                        {sort.name === "logicpro" && "Logic Pro"}
                        {sort.name === "ableton" && "Ableton"}
                        {sort.name === "studioone" && "Studio One"}
                        {sort.name === "protools" && "Pro Tools"}
                      </li>
                    );
                  })}
                </div>
              )}
            </ul>
          </div>
        )}

        {/* Types */}
        {productType == "package" && (
          <div className="mr-3 relative" ref={typesMenuRef}>
            <ul
              role="menu"
              onClick={() => setShowTypesOptions(!showTypesOptions)}
              className={filtersStyles}
            >
              <div className="flex mx-6">
                <li className="relative -left-3">
                  {router.asPath == "/packages" ? "Types" : typesFilter.name || "Types"}
                </li>
                <span className={caretStyles}></span>
              </div>

              {showTypesOptions && (
                <div className="absolute w-[78px] bg-[#23252b] left-0 z-30 rounded-lg mt-2">
                  {filtersData?.types?.map((sort) => {
                    return (
                      <li
                        role="menuitem"
                        key={sort.id}
                        onClick={() => handleFilterChange("type", sort)}
                        className="px-2 py-[2px] hover:bg-[#33363f] rounded-lg transition duration-200"
                      >
                        {sort.name}
                      </li>
                    );
                  })}
                </div>
              )}
            </ul>
          </div>
        )}

        <BiRefresh
          className={resetStyles}
          onClick={() => {
            router.push(productType == "track" ? "/tracks" : "/packages");
          }}
        />
      </div>

      <BiRefresh
        className={resetStyles2}
        onClick={() => {
          router.push(productType == "track" ? "/tracks" : "/packages");
        }}
      />
    </div>
  );
}
