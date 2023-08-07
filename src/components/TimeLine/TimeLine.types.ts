export enum GroupCode {
  PICKED_UP = "PICKED_UP",
  IN_TRANSIT = "IN_TRANSIT",
  OUT_FOR_DELIVERY = "OUT_FOR_DELIVERY",
  DELIVERED = "DELIVERED",
}
export interface TimeGroup {
  id: string;
  code: GroupCode;
  sort: number;
  name: string;
  status: Status;
  type: EventType;
}

export enum EventCode {
  ORDER_RECEIVED = "ORDER_RECEIVED",
  PACKAGE_PREPARATION = "PACKAGE_PREPARATION",
  PACKAGE_READY = "PACKAGE_READY",
  PACKAGE_SCANNED_AT_FACILITY = "PACKAGE_SCANNED_AT_FACILITY",
  PACKAGE_DEPARTED_FACILITY = "PACKAGE_DEPARTED_FACILITY",
  PACKAGE_IN_FLIGHT = "PACKAGE_IN_FLIGHT",
  PACKAGE_ARRIVED_AT_LOCAL_FACILITY = "PACKAGE_ARRIVED_AT_LOCAL_FACILITY",
  PACKAGE_OUT_FOR_LAST_MILE_DELIVERY = "PACKAGE_OUT_FOR_LAST_MILE_DELIVERY",
  DELIVERY_ATTEMPT_FAILED = "DELIVERY_ATTEMPT_FAILED",
  RESCHEDULED_FOR_DELIVERY = "RESCHEDULED_FOR_DELIVERY",
  PACKAGE_OUT_FOR_SECOND_ATTEMPT = "PACKAGE_OUT_FOR_SECOND_ATTEMPT",
  SUCCESSFULLY_DELIVERED = "SUCCESSFULLY_DELIVERED",
}

export enum EventType {
  STATUS = "status",
  INCIDENCE = "incidence",
}
export interface TimeEvent {
  code: EventCode;
  tracked_at: Date;
  type: EventType;
  timeline_group: EventCode;
  name: string;
}

export enum Status {
  COMPLETE = "complete",
  CURRENT = "current",
  UPCOMING = "upcoming",
}

export interface GroupName {
  code: GroupCode;
  name: string;
}

export interface EventName {
  code: EventCode;
  name: string;
}
