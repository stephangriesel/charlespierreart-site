import React, { useState } from "react";
import Modal from "./Modal";

const CardContainer = ({ notionData }) => {
  const results = notionData.results;
  const [modalShown, toggleModal] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  console.log("original results", results);
  console.log("selected filter", selectedFilters)

  const handleFilterClick = (filterName) => {
    if (selectedFilters.includes(filterName)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filterName));
    } else {
      setSelectedFilters([...selectedFilters, filterName]);
    }
  };

  console.log("handle filtter click", handleFilterClick)

  const filters = results.reduce((acc, obj) => {
    obj.properties.Category.multi_select.forEach((filter) => {
      const filterIndex = acc.findIndex((item) => item.name === filter.name);
      if (filterIndex !== -1) {
        acc[filterIndex].ids.push(obj.id);
      } else {
        acc.push({
          name: filter.name,
          color: filter.color,
          ids: [obj.id]
        });
      }
    });
    return acc;
  }, []);

  console.log("filters", filters)

  return (
    <>
      <div>
        {filters.map((filter) => (
          <button
            key={filter.name}
            onClick={() => handleFilterClick(filter.name)}
            style={{
              backgroundColor: selectedFilters.includes(filter.name)
                ? filter.color
                : 'gray',
              color: selectedFilters.includes(filter.name)
                ? 'white'
                : 'black',
              marginRight: '10px'
            }}
          >
            {filter.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 cursor-pointer">
        {results.map((results, index) => {
          return (
            <div
              key={index}
              className="flex flex-col p-4 m-4 rounded-lg bg-slate-200 shadow-xl transition-all duration-300 opacity-80 cursor-pointer"
            >
              {results.properties.Image.files.map((imageResult, index) => {
                return (
                  <div key={index}>
                    <img
                      src={imageResult.external.url}
                      className="cursor-pointer"
                      onClick={() => {
                        toggleModal(!modalShown);
                      }}
                    />
                    <Modal
                      shown={modalShown}
                      close={() => {
                        toggleModal(false);
                      }}
                    >
                      <img src={imageResult.external.url} />
                    </Modal>
                  </div>
                );
              })}
              {results.properties.Name.title.map((titleResult, index) => {
                return (
                  <h1 className="text-center font-bold" key={index}>
                    {titleResult.plain_text}
                  </h1>
                );
              })}
              {results.properties.Content.rich_text.map(
                (contentResult, index) => {
                  return (
                    <p className="text-center" key={index}>
                      {contentResult.plain_text}
                    </p>
                  );
                }
              )}
              {results.properties.Content.rich_text.map(
                (contentResult, index) => {
                  return (
                    <p className="text-center" key={index}>
                      {contentResult.plain_text}
                    </p>
                  );
                }
              )}
              <button
                className="bg-white p-2 mt-5 rounded text-center hover:bg-black hover:text-white"
                key={index}
              >
                {results.properties.Btn_txt.rich_text.map(
                  (btnTxtResult, index) => {
                    return (
                      <a key={index} href={results.properties.Link.url}>
                        {btnTxtResult.plain_text}
                      </a>
                    );
                  }
                )}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardContainer;
