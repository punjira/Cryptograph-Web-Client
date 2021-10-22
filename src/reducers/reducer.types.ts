/**
 * common xhr state that can be extended
 */
export interface XHRState {
  isFetching: boolean;
  error: string | null | undefined;
}
