import { migrateDb } from '../utils/migrate';

(async () => {
  try {
    await migrateDb();
  } catch (err) {
    console.error(err);
    process.exit(0);
  }
})();
