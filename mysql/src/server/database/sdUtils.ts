import connection from "./connection";

export async function runSelect<T>(query: string, params?: any): Promise<Partial<T>[]> {
    const [results]:any = await connection.query(query, params);
    return results as T[];
  }