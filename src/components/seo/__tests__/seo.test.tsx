import { cleanup, render } from "@testing-library/react";
import * as Gatsby from "gatsby";
import React from "react";
import { SEO } from "../SEO";
const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => {
    return {
      site: {
        siteMetadata: {
          title: "Test",
          description: "Test",
          author: "@test",
        },
      },
    };
  });
});

afterEach(cleanup);

it("matches snapshot", () => {
  const { asFragment } = render(<SEO />);
  expect(asFragment()).toMatchSnapshot();
});
