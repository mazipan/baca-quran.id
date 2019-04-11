export interface MetaItem {
  hid: string,
  property?: string,
  name?: string,
  content: string,
}

export interface Meta {
  title: string,
  meta: MetaItem[]
}
