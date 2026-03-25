import type { Statement } from 'tinyest';

function fail(node: Statement) {
  throw new Error(`Fail: ${node}`);
}
