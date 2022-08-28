import GameSavingLoader from '../gameSavingLoader';

test('async json parse', async (done) => {
  const saving = await GameSavingLoader.load();
  expect(saving).toEqual({ GameSaving: '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}' });
  done();
});
