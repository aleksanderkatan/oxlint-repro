type BinaryExpression = [Expression];
type AssignmentExpression = [Expression];
type LogicalExpression = [Expression];
type UnaryExpression = [Expression];
type ObjectExpression = [Expression];
type ArrayExpression = [Expression];
type ConditionalExpression = [Expression];
type MemberAccess = [Expression];
type IndexAccess = [Expression];
type Call = [Expression];
type PostUpdate = [Expression];
type PreUpdate = [Expression];

type Expression =
  | BinaryExpression
  | AssignmentExpression
  | LogicalExpression
  | UnaryExpression
  | ObjectExpression
  | ArrayExpression
  | ConditionalExpression
  | MemberAccess
  | IndexAccess
  | Call
  | PostUpdate
  | PreUpdate;

function fail(node: Expression) {
  throw new Error(`Fail: ${node}`);
}
