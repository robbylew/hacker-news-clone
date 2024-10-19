import { passwordIterations } from '../../src/config';
import { NewsItemModel, UserModel } from '../../src/data/models';
import { validateNewUser } from '../../src/data/validation/user';
import { createHash, createSalt } from '../../src/helpers/hash-password';
import type { HnCache } from '../database/cache';
import type { HnDatabase } from '../database/database';

export class UserService {
  db: HnDatabase;
  cache: HnCache;

  constructor(db: HnDatabase, cache: HnCache) {
    this.db = db;
    this.cache = cache;
  }

  async getUser(id: string): Promise<UserModel | void> {
    return this.cache.getUser(id) || this.db.fetchUser(id);
  }

  async getPostsForUser(id: string): Promise<NewsItemModel[]> {
    return this.db.getNewsItems().filter((newsItem) => newsItem.submitterId === id);
  }

}