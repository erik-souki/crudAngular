export interface Student {
  _id: string;
  name: string;
  ra: bigint;
  //ficar de olho aqui, pq ra é do tipo long, no javascript é big int
}
