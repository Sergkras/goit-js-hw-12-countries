import { alert, error } from '@pnotify/core';
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

function showAlert(text) {
  alert({
    title: "Attention",
    text:
      `${text}`,
    modules: new Map([
      [
        Confirm,
        {
          confirm: true,
          buttons: [
            {
              text: "Ok",
              primary: true,
              click: notice => {
                notice.close(500);
              }
            }
          ]
        }
      ]
    ])
  });
}
