import { error, success } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export function msgError(msg) {
  error({
    title: false,
    text: msg,
    shadow: true,
    sticker: false,
  });
}

export function msgSuccess(msg) {
  success({
    title: false,
    text: msg,
    shadow: true,
    sticker: false,
  });
}
