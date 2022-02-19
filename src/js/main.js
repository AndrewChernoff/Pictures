import accordion from "./modules/accordion";
import burger from "./modules/burger";
import calc from "./modules/calc";
import filterTabs from "./modules/filterTabs";
import forms from "./modules/forms";
import inputLangText from "./modules/inputLangText";
import loadMore from "./modules/loadMore";
import mask from "./modules/mask";
import modal from "./modules/modal";
import pictures from "./modules/pictures";
import slider from "./modules/slider";

let state = {};
console.log(state);

modal();
slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
slider('.main-slider-item', 'vertical');
forms(state);
mask('[name="phone"]');
inputLangText('[name="name"]');
inputLangText('[name="message"]');
loadMore('.button-styles', '.styles .row');
calc(state);
filterTabs('.portfolio-menu li', '.portfolio-block');
pictures('.sizes-block');
accordion('.accordion-heading', '.accordion-block');
burger('.burger', '.burger-menu')