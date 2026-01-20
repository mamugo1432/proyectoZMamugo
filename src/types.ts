type survivorStatus = "ESTABLE" | "CRÍTICO" | "DESAPARECIDO";

export interface Survivor {
    id:string,
    nombre:string,
    estado:survivorStatus,
    ubicacion:string,
    email:string,
    avatar:string
}

export type newSurvivor = Omit<Survivor, "id">;
