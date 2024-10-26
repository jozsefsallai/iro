import _iro, { type Block } from "./src/iro.ts";

export default function iro(str: string, ...blocks: Block[]): string {
  if (Deno.noColor) {
    return str;
  }

  return _iro(str, ...blocks);
}

export * from "./src/iro.ts";
