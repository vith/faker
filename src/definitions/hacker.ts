import { allOf } from './utils';

/**
 * The possible definitions related to computers.
 */
export interface HackerDefinitions {
  /**
   * Generic computer related abbreviations (e.g. `RAM`, `EXE`).
   */
  abbreviation: string[];
  /**
   * Some computer related adjectives or descriptors (e.g. `digital`, `bluetooth`)
   */
  adjective: string[];
  /**
   * Some computer related verbs for continuous actions (en: `ing` suffix; e.g. `hacking`).
   */
  ingverb: string[];
  /**
   * Some computer related nouns (e.g. `protocol`, `sensor`)
   */
  noun: string[];
  /**
   * Some phrases that will be injected with random hacker words.
   * May use any of the HackerDefinition keys wrapped in double braces.
   * (e.g. `I'm {{ingverb}} {{adjective}} {{noun}}` )
   *
   * @see Helpers.mustache()
   */
  phrase: string[];
  /**
   * Some computer related verbs (e.g. `hack`).
   */
  verb: string[];
}

/**
 * Internal: A list of all keys for the HackerDefinitions.
 */
export const HACKER = allOf<keyof HackerDefinitions>()(
  'abbreviation',
  'adjective',
  'ingverb',
  'noun',
  'phrase',
  'verb'
);
