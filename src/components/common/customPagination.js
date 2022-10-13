import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const CustomPagination = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const pages = [];

  // pagination functions start//
  for (let i = 1; i <= Math.ceil(props.datalength / props.itemperpage); i++) {
    pages.push(i);
  }
  const handlePagniation = (pgno) => {
    navigate(`/cmstable/${pgno}`);
  };
  const handleprepage = () => {
    if (Number(params.id) !== 1) {
      navigate(`/cmstable/${Number(params.id) - 1}`);
    }
  };
  const handleNextpage = () => {
    if (params.id < props.datalength / props.itemperpage) {
      navigate(`/cmstable/${Number(params.id) + 1}`);
    }
  };
  // pagination end

  return (
    <>
      <div class="text-right">
        <nav>
          <ul class="pagination flex">
            <li class="page-item" onClick={handleprepage}>
              <span class="page-link text-white" aria-hidden="true">
                Previous
              </span>
            </li>
            {console.log("pagess", pages)}
            {pages.length &&
              pages.map((pgno, i) => {
                return (
                  <li
                    class={
                      "page-item " +
                      (Number(params.id) === pgno
                        ? " text-white"
                        : " text-gray-300")
                    }
                    aria-current="page"
                    onClick={() => {
                      handlePagniation(pgno);
                    }}
                  >
                    <span class="page-link text-white">{pgno}</span>
                  </li>
                );
              })}
            <li class="page-item" onClick={handleNextpage}>
              <button
                type="button"
                dusk="nextPage"
                class="page-link text-white"
                rel="next"
                aria-label="Next »"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default CustomPagination;
