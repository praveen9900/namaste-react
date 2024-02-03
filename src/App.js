import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

//import Grocery from "./components/Grocery";
// const resObj = {
//   info: {
//     id: "660675",
//     name: "Cafe Amudham",
//     cloudinaryImageId: "384d020ad18d2752ddd119cb585024d7",
//     locality: "5th Block Kormangala",
//     areaName: "Koramangala",
//     costForTwo: "₹200 for two",
//     cuisines: ["South Indian"],
//     avgRating: 4.6,
//     veg: true,
//     parentId: "396620",
//     avgRatingString: "4.6",
//     totalRatingsString: "5K+",
//     sla: {
//       deliveryTime: 15,
//       lastMileTravel: 0.7,
//       serviceability: "SERVICEABLE",
//       slaString: "15 mins",
//       lastMileTravelString: "0.7 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: {
//       nextCloseTime: "2024-01-03 23:59:00",
//       opened: true,
//     },
//     badges: {
//       textExtendedBadges: [
//         {
//           iconId: "guiltfree/GF_Logo_android_3x",
//           shortDescription: "options available",
//           fontColor: "#7E808C",
//         },
//       ],
//     },
//     isOpen: true,
//     type: "F",
//     badgesV2: {
//       entityBadges: {
//         imageBased: {},
//         textBased: {},
//         textExtendedBadges: {
//           badgeObject: [
//             {
//               attributes: {
//                 description: "",
//                 fontColor: "#7E808C",
//                 iconId: "guiltfree/GF_Logo_android_3x",
//                 shortDescription: "options available",
//               },
//             },
//           ],
//         },
//       },
//     },
//     aggregatedDiscountInfoV3: {
//       header: "₹120 OFF",
//       subHeader: "ABOVE ₹199",
//       discountTag: "FLAT DEAL",
//     },
//     orderabilityCommunication: {
//       title: {},
//       subTitle: {},
//       message: {},
//       customIcon: {},
//     },
//     differentiatedUi: {
//       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       differentiatedUiMediaDetails: {
//         mediaType: "ADS_MEDIA_ENUM_IMAGE",
//         lottie: {},
//         video: {},
//       },
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {},
//   },
//   analytics: {
//     context: "seo-data-9e587e84-f53a-42e8-a99b-24dd1343268e",
//   },
//   cta: {
//     link: "https://www.swiggy.com/restaurants/cafe-amudham-5th-block-kormangala-koramangala-bangalore-660675",
//     text: "RESTAURANT_MENU",
//     type: "WEBLINK",
//   },
//   widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
// };

const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
