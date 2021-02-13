// deno-lint-ignore-file
import _iro, { Block } from './iro';

function areColorsEnabled() {
  if (typeof process !== 'undefined') {
    const { FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env;
    const isTTY = process.stdout?.isTTY;

    return !NODE_DISABLE_COLORS && !NO_COLOR && TERM !== 'dumb' && (
      FORCE_COLOR !== null && FORCE_COLOR !== '0' || isTTY
    );
  }

  return true;
}

export default function iro(str: string, ...blocks: Block[]): string {
  if (!areColorsEnabled()) {
    return str;
  }

  return _iro(str, ...blocks);
}

export * from './iro';
