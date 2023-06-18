import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { pathAPI, pathAdmin, title } from "../../../ultis/path";
import ReactPaginate from "react-paginate";
import { NavLink, useNavigate } from "react-router-dom";
import { deleteById, getAll } from "../../../apis/BaseAPI";
import icons from "../../../ultis/icons";

const CategoryList = () => {
  document.title = title.LIST_CATEGORY_ADMIN;
  const itemsPerPage = 10;
  const navigate = useNavigate();
  const { AiOutlineArrowRight, AiOutlineArrowLeft } = icons;
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const { AiFillDelete, AiTwotoneEdit, IoMdClose } = icons;
  const [category, setCategory] = useState();
  const modalContainer = document.querySelector(".modal-container");

  const openModal = () => {
    const modal = document.querySelector(".modal");
    const modalClose = document.querySelector(".js-modal-close");

    function hideModal() {
      modal.classList.remove("open");
    }

    modal.classList.add("open");
    modalClose.addEventListener("click", hideModal);

    modal.addEventListener("click", hideModal);
  };

  const getAllCategory = () => {
    getAll("category-event").then((categoryRequest) => {
      if (categoryRequest.status === 200 && categoryRequest.statusText === "") {
        setCategories(categoryRequest.data);
      }
    });
  };

  const handelAddOrUpdate = (e) => {    
    if (category === undefined) {
      console.log("add");
    } else {
      console.log("update");
    }

    modalContainer.addEventListener("click",function(event){
      event.defaultPrevented();
      event.stopPropagation();
    });

  };

  useEffect(() => {
    getAllCategory();
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = categories.slice(itemOffset, endOffset);
    setPageCount(Math.ceil(categories.length / itemsPerPage));
    setCurrentItems(currentItems);
  }, [itemOffset, categories]);

  const handleDeleteCategory = (category) => {
    if (
      window.confirm(
        `Bạn có chắc muốn xóa loại sự kiện có tên ${category.tenSuKien} chứ?`
      )
    ) {
      deleteById(category.maLoaiSuKien, pathAPI.category).then(
        (responseEvent) => {
          if (responseEvent.status === 200 && responseEvent.statusText === "") {
            getAllCategory();
          }
        }
      );
    }
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % categories.length;
    setItemOffset(newOffset);
  };

  return (
    <Styled>
      <div id="category">
        <button
          onClick={() => {
            //navigate(pathAdmin.CREATE_CATEGORY);
            openModal();
            setCategory(undefined);
          }}
          className="btn"
        >
          Thêm loại sự kiện
        </button>
        <table className="categories">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên loại sự kiện</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((category, index) => (
              <tr key={index} className="category-item">
                <td style={{ width: "64px" }}>{++index}</td>
                <td>{category.tenLoaiSuKien}</td>
                <td style={{ width: "64px" }}>
                  <div className="flex justify-center gap-2 items-center">
                    <span
                      className="edit rounded-md cursor-pointer"
                      onClick={() => {
                        openModal();
                        setCategory(category);
                      }}
                    >
                      <AiTwotoneEdit size={30} />
                    </span>
                    <span className="delete">
                      <AiFillDelete
                        color="black"
                        size={30}
                        onClick={() => handleDeleteCategory(category)}
                      />
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div id="page" className="mt-2">
          <ReactPaginate
            breakLabel="..."
            nextLabel={<AiOutlineArrowRight size={30} />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            className="flex gap-6 justify-center items-center cursor-default"
            pageClassName="text-2xl p-4"
            activeClassName="bg-main-primary-orange text-black"
            pageCount={pageCount}
            disabledClassName="opacity-20"
            disabledLinkClassName="cursor-default"
            previousLabel={<AiOutlineArrowLeft size={30} />}
            renderOnZeroPageCount={null}
          />
        </div>
      </div>

      <div className="modal">
        <div className="modal-container">
          <div className="modal-close text-white js-modal-close">
            <IoMdClose />
          </div>

          <header className="modal-header">
            <span className="text-white">
              {category === undefined ? "Thêm" : "Sửa"} loại sự kiện
            </span>
          </header>
          <div className="modal-body">
            <label htmlFor="category-input" className="modal-label">
              Tên loại sự kiện
            </label>
            <input
              type="text"
              value={category?.tenLoaiSuKien}
              
              placeholder="Nhập tên loại sự kiện"
              id="category-input"
              className="modal-input"
            />

            <button
              onClick={(e) => {
                e.preventDefault();
                handelAddOrUpdate(e)}
              }
              className="btn isClick"
            >
              {category === undefined ? "Thêm" : "Sửa"}
            </button>
          </div>
        </div>
      </div>
    </Styled>
  );
};

const Styled = styled.div`
  #category {
    display: flex;
    flex-direction: column;
  }

  .edit {
    background-color: #ffbb33;
    color: white;
  }
  .delete {
    background-color: #ef5350;
    cursor: pointer;
  }
  #category > .categories {
    margin-top: 20px;
    padding: 0;
    th {
      width: calc(100% / 3);
    }
  }

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  img:hover {
    opacity: 1;
    cursor: default;
  }

  .edit,
  .delete {
    padding: 4px;
  }

  button {
    background-color: #9ccc65;
    color: white;
  }

  .modal.open {
    display: flex;
  }

  .modal {
    input {
      background-color: white;
      padding: 8px;
    }

    .btn {
      width: 100%;
    }

    .modal-body {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .modal-container {
      width: 400px;
      min-height: 200px;
    }

    .modal-header {
      height: 80px;
    }
  }
`;

export default CategoryList;
