import { Pool, PoolClient, QueryResult } from 'pg';
import { B2B_LOANS_CLIENT_ID, B2C_LOANS_CLIENT_ID } from 'test/utils/envs';

async function executeQuery(isB2C: boolean, dbPool: Pool, query: string): Promise<QueryResult[]> {
  let client: PoolClient;
  let results: QueryResult[];
  try {
    client = await dbPool.connect();
    let resultset = await client.query(applyParameters(isB2C, query));
    results = resultset.rows ? resultset.rows : null;
  } catch (error) {
    console.log("query execution failed", error);
    throw new Error("query execution failed", { cause: error });
  } finally {
    if (client) {
      client.release();
    }
  }
  return results;
}

function applyParameters(isB2C: boolean, query: string): string {
  let code = isB2C ? B2C_MF_CLIENT_ID : B2B_MF_CLIENT_ID;
  let plan = isB2C ? "DIRECT" : "REGULAR";
  return query.replace("#CLIENT_CODE#", code).replace("#SCHEME_PLAN#", plan);
}

export { executeQuery };
