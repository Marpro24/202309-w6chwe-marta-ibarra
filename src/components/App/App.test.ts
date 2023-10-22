import App from "./App.js";

describe("Given an app component ", () => {
  describe("When it receives a body parent element", () => {
    test("Then it should show class name inside a heading", () => {
      const body = document.querySelector("body")!;

      const app = new App(body);
      app.render();

      const heading = document.querySelector("header")!;

      expect(heading).not.toBeNull();
      expect(heading.className).toBe("main-header");
    });
  });
});
