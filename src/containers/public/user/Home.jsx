import React, { memo, useEffect, useState } from "react";
import { Slider } from "../../../components";
import { pathAPI, title } from "../../../ultis/path";
import { getAll } from "../../../apis/BaseAPI";
import CategoryEventItem from "../../../components/CategoryEventItem";

function Home() {
  document.title = title.HOME;

  const [events, setEvents] = useState([]);
  const [slider, setSlider] = useState([]);
  const [categories, setCategories] = useState([]);
  const [eventRender, setEventRender] = useState([]);

  useEffect(() => {
    getAll(pathAPI.events).then((eventList) => {
      if (eventList.status === 200 && eventList.statusText === "") {
        setEvents(eventList.data);
      }
    });

    getAll(pathAPI.categoryService).then((category) => {
      if (category.status === 200 && category.statusText === "") {
        setCategories(category.data);
      }
    });
  }, []);

  // const arrayJsonText = [
  //   {
  //     image: "https://file1.hutech.edu.vn/file/news/2107391681460994.png",
  //     title: "Chinh phục nghề Logistics: Cần có sự chuẩn bị nghiêm túc từ sớm",
  //     decription:
  //       "Ngày 11/4, series “Ra chơi, hóng chuyện nghề” tiếp tục phát sóng tập 14 “Theo nghề Logistics, người trẻ cần sẵn sàng với những thử thách gì?” chia sẻ về những khó khăn cũng như bước chuẩn bị cho ngành nghề Logistics.",
  //   },
  //   {
  //     image: "https://file1.hutech.edu.vn/file/news/2107391681460994.png",
  //     title: "Chinh phục nghề Logistics: Cần có sự chuẩn bị nghiêm túc từ sớm",
  //     decription:
  //       "Ngày 11/4, series “Ra chơi, hóng chuyện nghề” tiếp tục phát sóng tập 14 “Theo nghề Logistics, người trẻ cần sẵn sàng với những thử thách gì?” chia sẻ về những khó khăn cũng như bước chuẩn bị cho ngành nghề Logistics.",
  //   },
  //   {
  //     image: "https://file1.hutech.edu.vn/file/news/2107391681460994.png",
  //     title: "Chinh phục nghề Logistics: Cần có sự chuẩn bị nghiêm túc từ sớm",
  //     decription:
  //       "Ngày 11/4, series “Ra chơi, hóng chuyện nghề” tiếp tục phát sóng tập 14 “Theo nghề Logistics, người trẻ cần sẵn sàng với những thử thách gì?” chia sẻ về những khó khăn cũng như bước chuẩn bị cho ngành nghề Logistics.",
  //   },
  //   {
  //     image: "https://file1.hutech.edu.vn/file/news/2107391681460994.png",
  //     title: "Chinh phục nghề Logistics: Cần có sự chuẩn bị nghiêm túc từ sớm",
  //     decription:
  //       "Ngày 11/4, series “Ra chơi, hóng chuyện nghề” tiếp tục phát sóng tập 14 “Theo nghề Logistics, người trẻ cần sẵn sàng với những thử thách gì?” chia sẻ về những khó khăn cũng như bước chuẩn bị cho ngành nghề Logistics.",
  //   },
  //   {
  //     image: "https://file1.hutech.edu.vn/file/news/2107391681460994.png",
  //     title: "Chinh phục nghề Logistics: Cần có sự chuẩn bị nghiêm túc từ sớm",
  //     decription:
  //       "Ngày 11/4, series “Ra chơi, hóng chuyện nghề” tiếp tục phát sóng tập 14 “Theo nghề Logistics, người trẻ cần sẵn sàng với những thử thách gì?” chia sẻ về những khó khăn cũng như bước chuẩn bị cho ngành nghề Logistics.",
  //   },
  //   {
  //     image: "https://file1.hutech.edu.vn/file/news/2107391681460994.png",
  //     title: "Chinh phục nghề Logistics: Cần có sự chuẩn bị nghiêm túc từ sớm",
  //     decription:
  //       "Ngày 11/4, series “Ra chơi, hóng chuyện nghề” tiếp tục phát sóng tập 14 “Theo nghề Logistics, người trẻ cần sẵn sàng với những thử thách gì?” chia sẻ về những khó khăn cũng như bước chuẩn bị cho ngành nghề Logistics.",
  //   },
  //   {
  //     image: "https://file1.hutech.edu.vn/file/news/2107391681460994.png",
  //     title: "Chinh phục nghề Logistics: Cần có sự chuẩn bị nghiêm túc từ sớm",
  //     decription:
  //       "Ngày 11/4, series “Ra chơi, hóng chuyện nghề” tiếp tục phát sóng tập 14 “Theo nghề Logistics, người trẻ cần sẵn sàng với những thử thách gì?” chia sẻ về những khó khăn cũng như bước chuẩn bị cho ngành nghề Logistics.",
  //   },
  //   {
  //     image: "https://file1.hutech.edu.vn/file/news/2107391681460994.png",
  //     title: "Chinh phục nghề Logistics: Cần có sự chuẩn bị nghiêm túc từ sớm",
  //     decription:
  //       "Ngày 11/4, series “Ra chơi, hóng chuyện nghề” tiếp tục phát sóng tập 14 “Theo nghề Logistics, người trẻ cần sẵn sàng với những thử thách gì?” chia sẻ về những khó khăn cũng như bước chuẩn bị cho ngành nghề Logistics.",
  //   },
  //   {
  //     image: "https://file1.hutech.edu.vn/file/news/2107391681460994.png",
  //     title: "Chinh phục nghề Logistics: Cần có sự chuẩn bị nghiêm túc từ sớm",
  //     decription:
  //       "Ngày 11/4, series “Ra chơi, hóng chuyện nghề” tiếp tục phát sóng tập 14 “Theo nghề Logistics, người trẻ cần sẵn sàng với những thử thách gì?” chia sẻ về những khó khăn cũng như bước chuẩn bị cho ngành nghề Logistics.",
  //   },
  // ];

  // const arrayCardTop = arrayJsonText
  //   .map((item, index) => {
  //     if (index >= 0 && index <= 4) {
  //       return item;
  //     } else {
  //       return undefined;
  //     }
  //   })
  //   .filter((item) => item !== undefined);

  // const arrayCardBottom = arrayJsonText
  //   .map((item, index) => {
  //     if (index >= 5 && index <= 8) {
  //       return item;
  //     } else {
  //       return undefined;
  //     }
  //   })
  //   .filter((item) => item !== undefined);

  useEffect(() => {
    let arrayImagesTemp = [];
    let arrayEventsTemp = [];

    if (events.length > 0) {
      arrayImagesTemp = events
        .map((event, index) => {
          if (index < 5) {
            return {
              image: `${process.env.REACT_APP_API}/${process.env.REACT_APP_IMAGES}/${event.hinhSuKien}`,
              alt: event.tenSuKien,
            };
          }
        })
        .filter((event) => event !== undefined);

      arrayEventsTemp = categories
        .map((category) => {
          return {
            events: events.filter(
              (event) => category.maLoaiSuKien === event.loaiSuKien.maLoaiSuKien
            ),
            maLoaiSuKien: category.maLoaiSuKien,
            tenLoaiSuKien: category.tenLoaiSuKien,
          };
        })
        .filter((event) => event.events.length !== 0)
        .map((event) => {
          return {
            events: event.events.map((item) => {
              return {
                image:
                  "https://file1.hutech.edu.vn/file/news/2107391681460994.png",
                title: item.tenSuKien,
                decription: item.moTaSuKien,
              };
            }),
            maLoaiSuKien: event.maLoaiSuKien,
            tenLoaiSuKien: event.tenLoaiSuKien,
          };
        });

      setEventRender(arrayEventsTemp);
    }

    setSlider(arrayImagesTemp);
    return () => {
      arrayImagesTemp = [];
      arrayEventsTemp = [];
    };
  }, [events]);

  return (
    <div className="flex flex-col">
      <div className="mt-4">
        <Slider slider={slider} />
      </div>

      {/* <CategoryEventItem
        arrayCardBottom={arrayCardBottom}
        arrayCardTop={arrayCardTop}
      />

      <CategoryEventItem arrayCardTop={arrayCardTop} /> */}

      {eventRender.length !== 0 ? (
        eventRender.map((event) => {
          return (
            <CategoryEventItem
              idCategory={event.maLoaiSuKien}
              nameCategory={event.tenLoaiSuKien}
              arrayCardTop={event.events
                .map((item, index) => {
                  if (index >= 0 && index <= 4) {
                    return item;
                  } else {
                    return undefined;
                  }
                })
                .filter((item) => item !== undefined)}
              arrayCardBottom={
                event.events.length >= 5
                  ? event.events
                      .map((item, index) => {
                        if (index >= 5 && index <= 8) {
                          return item;
                        } else {
                          return undefined;
                        }
                      })
                      .filter((item) => item !== undefined)
                  : undefined
              }
            />
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default memo(Home);
