export const PaginateConfig = {
  PREVIOUS_LABEL: "prev",
  NEXT_LABEL: "next",
  BREAK_LABEL: "...",
  MARGIN_PAGES: 2,
  PAGE_RANGE: 5,
};

export enum Status {
  PENDING = "pending",
  LOAD = "load",
  LOADED = "loaded",
  ERROR = "error",
}

export enum Option {
  ALL_CONTACTS = "ALL_CONTACTS",
  FAVORITES = "FAVORITES",
}

export enum AppRoutes {
  LOGIN = "/login",
  MAIN = "/",
  NOT_FOUND = "/not-found",
}

export enum APIRoutes {
  LOGIN = "/api/login",
  CONTACTS = "/api/contacts",
  REGISTER = "/api/register",
}

export const CONTACTS_PER_PAGE = 6;
export const ERROR_TIMEOUT = 3000;
