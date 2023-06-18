import React, { memo, useEffect, useState } from "react";
import { Slider } from "../../../components";
import { pathAPI, title } from "../../../ultis/path.js";
import { getAll } from "../../../apis/BaseAPI.js";
import CategoryEventItem from "../../../components/CategoryEventItem";

function Home() {
  document.title = title.HOME;
  const [slider, setSlider] = useState([]);
  const [eventRender, setEventRender] = useState([]);
  
  const [categories, setCategories] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    
    getAll(pathAPI.events).then((eventList) => {
      if (eventList.status === 200 && eventList.statusText === "") {
        setEvents(eventList.data);
      }
    });

    getAll(pathAPI.category).then((category) => {
      if (category.status === 200 && category.statusText === "") {
        setCategories(category.data);
      }
    });
  }, []);

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
          }else{
            return undefined;
          }
        })
        .filter((event) => event !== undefined);

      arrayEventsTemp = categories
        .map((category) => {
          return {
            events: events.filter(
              (event) => category?.maLoaiSuKien === event.loaiSuKien?.maLoaiSuKien
            ),
            maLoaiSuKien: category?.maLoaiSuKien,
            tenLoaiSuKien: category?.tenLoaiSuKien,
          };
        })
        .filter((event) => event.events.length !== 0)
        .map((event) => {
          return {
            events: event.events.map((item) => {
              return {
                image:
                  `${process.env.REACT_APP_API}/${process.env.REACT_APP_IMAGES}/${item?.hinhSuKien}`,
                title: item.tenSuKien,
                decription: item.moTaSuKien,
                idEvent: item.maSuKien,
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
  }, [events, categories]);

  return (
    <div className="flex flex-col">
      <div className="mt-4">
        <Slider slider={slider} />
      </div>

      {eventRender.length !== 0 ? (
        eventRender.map((event, index) => {
          return (
            <CategoryEventItem
              key={index}
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
                .filter((item) => {
                  return item !== undefined;
                })}
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
