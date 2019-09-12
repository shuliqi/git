/**
 *
 * shigong表添加：startTime， endTime 字段
 */

exports.up = function(knex) {
  return knex.schema.table('shigongs', (table) => {
    table.dateTime('start_time').defaultTo(null).comment('试工开始时间');
    table.dateTime('end_time').defaultTo(null).comment('试工结束时间');
  });
};

exports.down = function(knex) {
  return knex.schema.table('shigongs', (table) => {
    table.dropColumn('start_time');
    table.dropColumn('end_time');
  });
};
