export enum SortOrder {
  Asc,
  Desc,
}

export enum TaskSortFields {
  Reference,
  CreateTime,
  UpdateTime,
}

export interface DateFilter {
  From: number | null;
  To: number | null;
}
