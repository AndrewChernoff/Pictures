import forms from "./modules/forms";
import inputLangText from "./modules/inputLangText";
import mask from "./modules/mask";
import modal from "./modules/modal";
import slider from "./modules/slider";

modal();
slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
slider('.main-slider-item', 'vertical');
forms();
mask('[name="phone"]');
inputLangText('[name="name"]');
inputLangText('[name="message"]');