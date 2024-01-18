import { atom } from 'recoil';

const Inputtitle = atom({
  key: "InputTodo",
  default: ""
});

const InputInterest = atom({
  key: "InputInterest",
  default: ""
});

const Todos = atom({
  key: "Todos",
  default: [{}]
});

export {
  Inputtitle,
  InputInterest,
  Todos
};
