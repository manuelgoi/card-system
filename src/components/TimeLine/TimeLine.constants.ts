import type {
  GroupName,
  EventName,
} from "@/components/TimeLine/TimeLine.types";
import { GroupCode, EventCode } from "@/components/TimeLine/TimeLine.types";

export const timeGroupName: Array<GroupName> = [
  {
    code: GroupCode.PICKED_UP,
    name: "Recogido",
  },
  {
    code: GroupCode.IN_TRANSIT,
    name: "En tránsito",
  },
  {
    code: GroupCode.OUT_FOR_DELIVERY,
    name: "En camino para entrega",
  },
  {
    code: GroupCode.DELIVERED,
    name: "Entregado",
  },
];

export const timeEventName: Array<EventName> = [
  {
    code: EventCode.ORDER_RECEIVED,
    name: "Pedido recibido",
  },
  {
    code: EventCode.PACKAGE_PREPARATION,
    name: "Preparación del paquete",
  },
  {
    code: EventCode.PACKAGE_READY,
    name: "Paquete listo",
  },
  {
    code: EventCode.PACKAGE_SCANNED_AT_FACILITY,
    name: "Paquete escaneado en la instalación",
  },
  {
    code: EventCode.PACKAGE_DEPARTED_FACILITY,
    name: "Paquete salió de la instalación",
  },
  {
    code: EventCode.PACKAGE_IN_FLIGHT,
    name: "Paquete en vuelo",
  },
  {
    code: EventCode.PACKAGE_ARRIVED_AT_LOCAL_FACILITY,
    name: "Paquete llegó a la instalación local",
  },
  {
    code: EventCode.PACKAGE_OUT_FOR_LAST_MILE_DELIVERY,
    name: "Paquete en camino para entrega final",
  },
  {
    code: EventCode.DELIVERY_ATTEMPT_FAILED,
    name: "Intento de entrega fallido",
  },
  {
    code: EventCode.RESCHEDULED_FOR_DELIVERY,
    name: "Reprogramado para entrega",
  },
  {
    code: EventCode.PACKAGE_OUT_FOR_SECOND_ATTEMPT,
    name: "Paquete en camino para segundo intento de entrega",
  },
  {
    code: EventCode.SUCCESSFULLY_DELIVERED,
    name: "Entregado con éxito",
  },
];

export const EMPTY_STRING: string = "";
