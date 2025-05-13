import "@testing-library/jest-dom";
import { shallow, render, mount } from "enzyme";
global.shallow = shallow;
global.render = render;
global.mount = mount;
// Pula as mensagens de aviso do 'createElement'
// Mas retorna um erro para qualquer outra
console.error = (message) => {
  if (!/(React.createElement: type should not be null)/.test(message)) {
    throw new Error(message);
  }
};
