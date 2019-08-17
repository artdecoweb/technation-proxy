import render from '@depack/render'

export {}
/**
 * @typedef {import('@typedefs/goa').Context & { render: typeof render, client: Client, session: { admin: boolean } }} Context
 * @typedef {(ctx: Context, next: !Function)} Middleware
 */

/**
 * @typedef {import('./src/database').default} Database
 */
/** @typedef {import('elasticsearch').Client} Client */