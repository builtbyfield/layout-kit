import cssesc from "cssesc";

export type CSSVarFunction =
  | `var(--${string})`
  | `var(--${string}, ${string | number})`;

export function createVar(
  name: string,
  fallback?: string | number
): CSSVarFunction {
  const cssVarName = cssesc(name, { isIdentifier: true });
  const fallbackValue = fallback ? `, ${fallback}` : "";

  return `var(--${cssVarName}${fallbackValue})` as const;
}

export function fallbackVar(
  ...values: [string, ...Array<string>]
): CSSVarFunction {
  let finalValue = "";

  values.reverse().forEach((value) => {
    if (finalValue === "") {
      finalValue = String(value);
    } else {
      if (typeof value !== "string" || !/^var\(--.*\)$/.test(value)) {
        throw new Error(`Invalid variable name: ${value}`);
      }

      finalValue = value.replace(/\)$/, `, ${finalValue})`);
    }
  });

  return finalValue as CSSVarFunction;
}

export function getVarName(variable: CSSVarFunction) {
  const matches = variable.match(/^var\((.*)\)$/);

  if (matches) {
    return matches[1];
  }

  return variable;
}

export function assignVar(
  variable: CSSVarFunction,
  value: string | number
): string {
  const cssVarName = getVarName(variable);

  return `${cssVarName}: ${value};`;
}
