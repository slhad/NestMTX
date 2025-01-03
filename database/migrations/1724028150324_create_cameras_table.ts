import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'cameras'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('credential_id')
        .unsigned()
        .references('id')
        .inTable('credentials')
        .onDelete('CASCADE')
      table.text('uid').notNullable()
      table.text('room').notNullable()
      table.string('name').notNullable()
      table.text('checksum').notNullable().unique()
      table.text('info').notNullable()
      table.string('mtx_path').nullable().unique()
      table.boolean('is_enabled').defaultTo(false)
      table.text('stream_extension_token').nullable()
      table.timestamp('expires_at').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
