import React, { useState } from "react";
import {
  LatestDeatils,
  Layout,
  NewsCard,
  Search,
  Text,
} from "../../components/shared";
import Styles from "./home.module.scss";
import BarChart from "../../components/shared/barchart/barchart";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const views = [
    {
      id: 1,
      img: "assets/images/armySeal.png",
      positionFirst: "Department of the Army",
      name: "",
      number: "7",
      positionSecond: "Department of Defense",
      place: "Arlington, VA",
    },
    {
      id: 2,
      img: "assets/images/armySeal.png",
      positionFirst: "Department of the Army",
      name: "",
      number: "7",
      positionSecond: "Department of Defense",
      place: "Arlington, VA",
    },
    {
      id: 3,
      img: "assets/images/armySeal.png",
      positionFirst: "Department of the Army",
      name: "",
      number: "7",
      positionSecond: "Department of Defense",
      place: "Arlington, VA",
    },
    {
      id: 4,
      img: "assets/images/armySeal.png",
      positionFirst: "Department of the Army",
      name: "",
      number: "7",
      positionSecond: "Department of Defense",
      place: "Arlington, VA",
    },
    {
      id: 5,
      img: "assets/images/armySeal.png",
      positionFirst: "Department of the Army",
      name: "",
      number: "7",
      positionSecond: "Department of Defense",
      place: "Arlington, VA",
    },
    {
      id: 6,
      img: "assets/images/armySeal.png",
      positionFirst: "Department of the Army",
      name: "",
      number: "7",
      positionSecond: "Department of Defense",
      place: "Arlington, VA",
    },
  ];
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
 const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSearch = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    // e.preventDefault();
    if (searchValue === "hello") {
      handleSearch();
      navigate(`/federale-department`); //navigate to the searched value
    }
  };
  return (
    <Layout isSearch={false} isFederal={false}>
      <div className={Styles.searchMain}>
        <Search
          inputValue={searchValue}
          onChange={handleSearchInputChanges}
          inputclassName={Styles.searchBox}
          placeholder={"Contacts, Offices, Vendors, Contracts..."}
          size={"icon_large"}
          iconColor={"gray04"}
          iconclassName={"icoClass"}
          searchHandler={callSearchFunction}
        />
      </div>
      <div className={`${Styles.newsContainer} ${"alignBetween mt35"}`}>
        <div className={`${Styles.colMd4} ${Styles.pLr12} $ ${Styles.w60}`}>
          <Text
            className={`${Styles.cardHeading}`}
            color="darkGray"
            strong="strong3"
          >
            Latest Detail Views
          </Text>
          <div
            className={`${Styles.homeCard} ${Styles.scrollBar} ${Styles.mb40}`}
          >
            {views.map((item) => (
              <LatestDeatils
                latestImage={item.img}
                name={item.name}
                postion={item.positionFirst}
                latestHeadingNumber={item.number}
                latestHeadingSecond={item.positionSecond}
                latestHeadingThird={item.place}
              />
            ))}
          </div>
        </div>
        <div className={`${Styles.newsCard}`}>
          <Text
            className={"mB14 textCenter"}
            variant="xbigText"
            color="darkGray"
            strong="strong3"
          >
            News
          </Text>
          <div className={`${Styles.scrollBar} ${Styles.scrollWrapper}`}>
            <NewsCard
              src="assets/images/officer.jpg"
              textFirst={
                "FORCM Jason R. Dunn is the new Force Master Chief of Commander Navy Installations Command"
              }
              textSecond="He succeeds former Chief, FORCM Greg A. Vidaurri, in the position. He served as Tomahawk LPO ..."
            />
            <NewsCard
              src="assets/images/officer.jpg"
              textFirst={
                "FORCM Jason R. Dunn is the new Force Master Chief of Commander Navy Installations Command"
              }
              textSecond="He succeeds former Chief, FORCM Greg A. Vidaurri, in the position. He served as Tomahawk LPO ..."
            />
          </div>
        </div>
        <div className={Styles.chart}>
          <Text
            className={`${"textCenter"}  ${Styles.updateText}`}
            variant="xbigText"
            color="darkGray"
            strong="strong3"
          >
            Updates
          </Text>
          <BarChart />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
