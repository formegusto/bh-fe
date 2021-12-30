// Data Type
export type ConsoleHeader = {
  accept: string;
  authorization: string;
};

export type ConsolePath = {
  buildingId?: number | null;
  unitId?: number | null;
  sensorId?: number | null;
};

export type ConsoleQuery = {
  include?: string | null;
  exclude?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  interval?: string | null;
  limit?: string | null;
  offset?: string | null;
};

// Redux Action Type
export const INIT_CONSOLE = "console/init";
