import knex from '~/db/knex';

const findByString = async (request, response) => {
  const searchString = request.body['searchString'];

  const users = await knex('user')
    .select('id', 'username', 'avatar_url', 'created_at')
    .where('username', 'like', `%${searchString}}%`)
    .orWhere('email', 'like', `%${searchString}%`)
    .limit(30)
    .orderBy('createdAt', 'desc');

  response.success(users);
};

export default findByString;
