import forms from "./modules/forms";
import modal from "./modules/modal";
import slider from "./modules/slider";

modal();
slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
slider('.main-slider-item', 'vertical');
forms();