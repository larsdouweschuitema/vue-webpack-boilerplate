import { mount } from "@vue/test-utils";
import App from "@/App";

describe("App component", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(App);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly', () => {
  const wrapper = mount(App)
  expect(wrapper.element).toMatchSnapshot()
  });
});
