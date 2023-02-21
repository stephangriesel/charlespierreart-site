import React, { useState } from "react";
import Modal from "./Modal";

import Close from "../icons/Close";

const CardContainer = ({ notionData }) => {
  const [modalShown, setModalShown] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const results = notionData.results;
  const filters = getFilters(results);

  function getFilters(results) {
    const filters = {};

    results.forEach((result) => {
      const categories = result.properties.Category.multi_select;

      categories.forEach((category) => {
        if (!filters[category.id]) {
          filters[category.id] = {
            name: category.name,
            color: category.color,
            results: [result],
          };
        } else {
          filters[category.id].results.push(result);
        }
      });
    });

    return Object.values(filters);
  }

  function handleFilterClick(filter) {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  }

  function handleModalToggle() {
    setModalShown(!modalShown);
  }

  function handleModalClose() {
    setModalShown(false);
  }

  function handleResetClick() {
    setSelectedFilters([]);
  }

  return (
    <>
      <div className="flex justify-center m-2">
        {filters.map((filter) => (
          <button
            className="m-2 capitalize rounded-full bg-white p-2"
            key={filter.name}
            onClick={() => handleFilterClick(filter)}
          >
            {filter.name}
          </button>
        ))}
        <button className="m-2 bg-white rounded-full p-2" onClick={handleResetClick}><Close /></button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 cursor-pointer">
        {results
          .filter((result) =>
            selectedFilters.length > 0
              ? result.properties.Category.multi_select.some((category) =>
                selectedFilters.some((filter) => filter.name === category.name)
              )
              : true
          )
          .map((result, index) => (
            <div
              key={result.id}
              className="flex flex-col p-4 m-4 rounded-lg bg-slate-200 shadow-xl transition-all duration-300 opacity-80 cursor-pointer"
            >
              {result.properties.Image.files.map((imageResult, index) => (
                <div key={index}>
                  <img
                    src={imageResult.external.url}
                    className="cursor-pointer"
                    onClick={handleModalToggle}
                  />
                  <Modal shown={modalShown} close={handleModalClose}>
                    <img src={imageResult.external.url} />
                  </Modal>
                </div>
              ))}
              {result.properties.Name.title.map((titleResult, index) => (
                <h1 className="text-center font-bold" key={index}>
                  {titleResult.plain_text}
                </h1>
              ))}
              {result.properties.Content.rich_text.map((contentResult, index) => (
                <p className="text-center" key={index}>
                  {contentResult.plain_text}
                </p>
              ))}
              {result.properties.Btn_txt.rich_text.map((btnTxtResult, index) => (
                <button className="bg-white p-2 mt-5 rounded text-center hover:bg-black hover:text-white" key={index}>
                  <a href={result.properties.Link.url}>{btnTxtResult.plain_text}</a>
                </button>
              ))}
            </div>
          ))}
      </div>
    </>
  );
};

export default CardContainer;