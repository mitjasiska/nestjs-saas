import { seed } from '../utils/seed';

(async () => {
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exit(0);
  }
})();
