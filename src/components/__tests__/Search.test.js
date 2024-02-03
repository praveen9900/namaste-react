import { render } from "@testing-library/react";
import Body from "../Body";
import data from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(data);
    },
  });
});

it("Should render the body component with search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
});

const cardsBeforeSearch = screen.getAllByTextId("resCard");
expect(cardsBeforeSearch.length).toBe(9);