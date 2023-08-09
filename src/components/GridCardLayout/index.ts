import GridCardLayout from "./MainComponent.vue";

export interface UseGridLayout {
  rowHeight: Readonly<number>;
}

const rowHeight: Readonly<number> = 400;
export function useGridCardLayout(): UseGridLayout {
  return {
    rowHeight,
  };
}
export default GridCardLayout;
