import { test, assert } from "vitest";
import { assignVar, createVar, fallbackVar, getVarName } from "../src/vars";

test("createVar", () => {
  const fooVar = createVar("foo");
  assert.equal(fooVar, "var(--foo)");
});

test("fallbackVar", () => {
  const fooVar = createVar("foo");
  const fallback = fallbackVar(fooVar, "baz");
  assert.equal(fallback, "var(--foo, baz)");
});

test("fallbackVarWithVar", () => {
  const fooVar = createVar("foo");
  const bazVar = createVar("baz");
  const fallback = fallbackVar(fooVar, bazVar);
  assert.equal(fallback, "var(--foo, var(--baz))");
});

test("getVarName", () => {
  const fooVar = createVar("foo");
  const fooVarName = getVarName(fooVar);
  assert.equal(fooVarName, "--foo");
});

test("assignVar", () => {
  const fooVar = createVar("foo");
  assert.equal(assignVar(fooVar, "baz"), "--foo: baz;");
});
