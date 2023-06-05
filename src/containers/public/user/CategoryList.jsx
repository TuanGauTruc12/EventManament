import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CategoryItem } from "../../../components";
import { Link, useParams } from "react-router-dom";
import { getAllByIDCategory } from "../../../apis/EventAPI";
import { pathImage } from "../../../ultis/path";
import moment from "moment";

const CategoryList = () => {
  const { id } = useParams();
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    document.title =
      categoryList.length === 0 ? "Không tìm thấy trang" : "Danh sách sự kiện";
  }, [categoryList]);

  //get api by id category in table sukien
  useEffect(() => {
    getAllByIDCategory(id).then((category) => {
      if (category.status === 200 && category.statusText === "") {
        setCategoryList(category.data);
      }
    });
  }, []);

  return (
    <Styled>
      {categoryList.length === 0 ? (
        <>
          <div className="not-found">
            <img
              src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
              alt="not-found"
            />
            <Link to="/" className="link">
              Quay về trang chủ
            </Link>
          </div>
        </>
      ) : (
        categoryList.map((category) => {
          return (
            <CategoryItem
              idEvent={category.maSuKien}
              image={`${pathImage}/${category.hinhSuKien}`}
              dateEvent={moment(category.ngayToChuc).format(
                "DD-MM-YYYY"
              )}
              event={category}
              decriptionEvent={category.moTaSuKien}
              locationEvent={category.diaDiem}
              nameEvent={category.tenSuKien}
            />
          );
        })
      )}
    </Styled>
  );
};

const Styled = styled.div`
  .not-found{
    text-align: center;
    width: 100%;
    
    img{
      width: 100%;
      margin-bottom: 8px;   
    }

    .link{
      color: blue;
    }

    .link:hover{
      color: blue;
      opacity: 0.7;
    }

    img:hover{
      opacity: unset;
      cursor: default;
    }
  }
`;

export default CategoryList;
