import React, { memo, useEffect, useState } from "react";
import icons from "../../../ultis/icons";
import { NavLink, useSubmit } from "react-router-dom";
import { CardBottom, Slider } from "../../../components";
import { pathAPI, title } from "../../../ultis/path";
import { getAll } from "../../../apis/BaseAPI";

function Home() {
  document.title = title.HOME;
  const { TbCalendarEvent, AiFillPlusCircle } = icons;

  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [slider, setSlider] = useState([]);

  const arrayJsonText = [
    {
      image: "https://file1.hutech.edu.vn/file/news/2107391681460994.png",
      title: "Chinh phục nghề Logistics: Cần có sự chuẩn bị nghiêm túc từ sớm",
      decription:
        "Ngày 11/4, series “Ra chơi, hóng chuyện nghề” tiếp tục phát sóng tập 14 “Theo nghề Logistics, người trẻ cần sẵn sàng với những thử thách gì?” chia sẻ về những khó khăn cũng như bước chuẩn bị cho ngành nghề Logistics.",
    },
    {
      image: "https://file1.hutech.edu.vn/file/news/2107391681460994.png",
      title: "Chinh phục nghề Logistics: Cần có sự chuẩn bị nghiêm túc từ sớm",
      decription:
        "Ngày 11/4, series “Ra chơi, hóng chuyện nghề” tiếp tục phát sóng tập 14 “Theo nghề Logistics, người trẻ cần sẵn sàng với những thử thách gì?” chia sẻ về những khó khăn cũng như bước chuẩn bị cho ngành nghề Logistics.",
    },
    {
      image: "https://file1.hutech.edu.vn/file/news/2107391681460994.png",
      title: "Chinh phục nghề Logistics: Cần có sự chuẩn bị nghiêm túc từ sớm",
      decription:
        "Ngày 11/4, series “Ra chơi, hóng chuyện nghề” tiếp tục phát sóng tập 14 “Theo nghề Logistics, người trẻ cần sẵn sàng với những thử thách gì?” chia sẻ về những khó khăn cũng như bước chuẩn bị cho ngành nghề Logistics.",
    },
    {
      image: "https://file1.hutech.edu.vn/file/news/2107391681460994.png",
      title: "Chinh phục nghề Logistics: Cần có sự chuẩn bị nghiêm túc từ sớm",
      decription:
        "Ngày 11/4, series “Ra chơi, hóng chuyện nghề” tiếp tục phát sóng tập 14 “Theo nghề Logistics, người trẻ cần sẵn sàng với những thử thách gì?” chia sẻ về những khó khăn cũng như bước chuẩn bị cho ngành nghề Logistics.",
    },
    {
      image: "https://file1.hutech.edu.vn/file/news/2107391681460994.png",
      title: "Chinh phục nghề Logistics: Cần có sự chuẩn bị nghiêm túc từ sớm",
      decription:
        "Ngày 11/4, series “Ra chơi, hóng chuyện nghề” tiếp tục phát sóng tập 14 “Theo nghề Logistics, người trẻ cần sẵn sàng với những thử thách gì?” chia sẻ về những khó khăn cũng như bước chuẩn bị cho ngành nghề Logistics.",
    },
    {
      image: "https://file1.hutech.edu.vn/file/news/2107391681460994.png",
      title: "Chinh phục nghề Logistics: Cần có sự chuẩn bị nghiêm túc từ sớm",
      decription:
        "Ngày 11/4, series “Ra chơi, hóng chuyện nghề” tiếp tục phát sóng tập 14 “Theo nghề Logistics, người trẻ cần sẵn sàng với những thử thách gì?” chia sẻ về những khó khăn cũng như bước chuẩn bị cho ngành nghề Logistics.",
    },
    {
      image: "https://file1.hutech.edu.vn/file/news/2107391681460994.png",
      title: "Chinh phục nghề Logistics: Cần có sự chuẩn bị nghiêm túc từ sớm",
      decription:
        "Ngày 11/4, series “Ra chơi, hóng chuyện nghề” tiếp tục phát sóng tập 14 “Theo nghề Logistics, người trẻ cần sẵn sàng với những thử thách gì?” chia sẻ về những khó khăn cũng như bước chuẩn bị cho ngành nghề Logistics.",
    },
    {
      image: "https://file1.hutech.edu.vn/file/news/2107391681460994.png",
      title: "Chinh phục nghề Logistics: Cần có sự chuẩn bị nghiêm túc từ sớm",
      decription:
        "Ngày 11/4, series “Ra chơi, hóng chuyện nghề” tiếp tục phát sóng tập 14 “Theo nghề Logistics, người trẻ cần sẵn sàng với những thử thách gì?” chia sẻ về những khó khăn cũng như bước chuẩn bị cho ngành nghề Logistics.",
    },
    {
      image: "https://file1.hutech.edu.vn/file/news/2107391681460994.png",
      title: "Chinh phục nghề Logistics: Cần có sự chuẩn bị nghiêm túc từ sớm",
      decription:
        "Ngày 11/4, series “Ra chơi, hóng chuyện nghề” tiếp tục phát sóng tập 14 “Theo nghề Logistics, người trẻ cần sẵn sàng với những thử thách gì?” chia sẻ về những khó khăn cũng như bước chuẩn bị cho ngành nghề Logistics.",
    },
  ];

  const arrayCardTop = arrayJsonText
    .map((item, index) => {
      if (index >= 0 && index <= 4) {
        return item;
      } else {
        return undefined;
      }
    })
    .filter((item) => item !== undefined);

  const arrayCardBottom = arrayJsonText
    .map((item, index) => {
      if (index >= 5 && index <= 8) {
        return item;
      } else {
        return undefined;
      }
    })
    .filter((item) => item !== undefined);

  useEffect(() => {
    let arrayTemp = [];

    if (events.length > 0) {
      arrayTemp = events
        .map((event, index) => {
          if (index < 5) {
            return {
              image: `${process.env.REACT_APP_API}/${process.env.REACT_APP_IMAGES}/${event.hinhSuKien}`,
              alt: event.tenSuKien,
            };
          }
        })
        .filter((event) => event !== undefined);
    }
    setSlider(arrayTemp);
  }, [events]);

  console.log(slider);

  useEffect(() => {
    getAll(pathAPI.events).then((eventList) => {
      if (eventList.status === 200 && eventList.statusText === "") {
        setEvents(eventList.data);
      }
    });
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col mt-4">
        <div>
          <Slider slider={slider} />
        </div>
        <div className="flex gap-3">
          <TbCalendarEvent
            size={24}
            style={{ color: "white", background: "red" }}
          />
          <NavLink to={"/abc"} className="active">
            Sự kiện khai trương ra mắt
          </NavLink>
        </div>
        <div className="mt-3 flex gap-2">
          <div className="flex flex-col w-3/4">
            <img
              src={arrayCardTop.find((item, index) => index === 0).image}
              alt={arrayCardTop.find((item, index) => index === 0).title}
            />
            <span className="active">
              {arrayCardTop.find((item, index) => index === 0).title}
            </span>
            <span>
              {arrayCardTop.find((item, index) => index === 0).decription}
            </span>
          </div>
          <div className="flex flex-col w-1/4 gap-6">
            <div className="flex flex-col border-b-2 gap-4 border-solid border-gray-200">
              <img
                src={arrayCardTop.find((item, index) => index === 1).image}
                alt={arrayCardTop.find((item, index) => index === 1).title}
              />
              <span className="font-bold">
                {arrayCardTop.find((item, index) => index === 1).title}
              </span>
            </div>

            {arrayCardTop
              .filter((item, index) => index !== 0 && index !== 1)
              .map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col border-b-2 border-solid border-gray-200"
                  >
                    <span className="cursor-pointer">{item.title}</span>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="flex mt-4">
          {arrayCardBottom.map((item, index) => (
            <CardBottom key={index} item={item} />
          ))}
        </div>
        <div className="flex justify-end">
          <div className="w-fit flex cursor-pointer items-center mt-4 text-red-400 text-sm gap-1">
            <AiFillPlusCircle color="red" size={24} />
            <span>Xem tất cả</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <div className="flex gap-3">
          <TbCalendarEvent
            size={24}
            style={{ color: "white", background: "red" }}
          />
          <NavLink to={"/abc"} className="active">
            Kỷ niệm thành lập
          </NavLink>
        </div>
        <div className="mt-3 flex gap-2">
          <div className="flex flex-col w-3/4">
            <img
              src={arrayCardTop.find((item, index) => index === 0).image}
              alt={arrayCardTop.find((item, index) => index === 0).title}
            />
            <span className="active">
              {arrayCardTop.find((item, index) => index === 0).title}
            </span>
            <span>
              {arrayCardTop.find((item, index) => index === 0).decription}
            </span>
          </div>
          <div className="flex flex-col w-1/4 gap-6">
            <div className="flex flex-col border-b-2 gap-4 border-solid border-gray-200">
              <img
                src={arrayCardTop.find((item, index) => index === 1).image}
                alt={arrayCardTop.find((item, index) => index === 1).title}
              />
              <span className="font-bold">
                {arrayCardTop.find((item, index) => index === 1).title}
              </span>
            </div>
            {arrayCardTop
              .filter((item, index) => index !== 0 && index !== 1)
              .map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col border-b-2 border-solid border-gray-200"
                  >
                    <span className="cursor-pointer">{item.title}</span>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="flex mt-4">
          {arrayCardBottom.map((item, index) => (
            <CardBottom key={index} item={item} />
          ))}
        </div>
        <div className="justify-end flex">
          <div className="flex w-fit cursor-pointer items-center mt-4 text-red-400 text-sm gap-1">
            <AiFillPlusCircle color="red" size={24} />
            <span>Xem tất cả</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Home);
