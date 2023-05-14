import fetch from 'node-fetch';

/**
 * @file `exporter.mjs`
 * (An ESM module exporting a default and named entity.)
 */

// export function namedMjsExport() {}
export default function defaultMjsExport() {console.log('default mjs')}

export function nodeFetch() {return fetch}

