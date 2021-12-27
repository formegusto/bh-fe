export type AlertData = {
  type: "error" | "info";
  action: string;
  message: string;
};

export const SHOW_ALERT = "alert/show";
export const HIDE_ALERT = "alert/hide";
