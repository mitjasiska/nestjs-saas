import { dropAllTables } from '../utils/drop';

(async () => {
  try {
    await dropAllTables();
  } catch (err) {
    console.error(err);
    process.exit(0);
  }
})();
