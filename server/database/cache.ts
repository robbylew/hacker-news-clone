import { debug } from 'debug';
import { LRUCache } from 'lru-cache';

import { NewsItemModel, UserModel, CommentModel, FeedType } from '../../src/data/models';
import { sampleData } from '../../src/data/sample-data';

const logger = debug('app:Cache');
logger.log = console.log.bind(console);

// The cache is a singleton

export class HnCache {
  isReady = false;

  /* Feeds - Arrays of post ids in descending rank order */
  [FeedType.TOP]: number[] = sampleData.top;

  [FeedType.NEW]: number[] = sampleData.new;

  [FeedType.BEST]: number[] = [];

  [FeedType.SHOW]: number[] = [];

  [FeedType.ASK]: number[] = [];

  [FeedType.JOB]: number[] = [];

  /* Pre constructed cache of news feeds with news item objects */
  topNewsItems: NewsItemModel[] = sampleData.topStoriesCache;

  newNewsItems: NewsItemModel[] = sampleData.topStoriesCache;

  bestNewsItems: NewsItemModel[] = sampleData.topStoriesCache;

  showNewsItems: NewsItemModel[] = sampleData.topStoriesCache;

  askNewsItems: NewsItemModel[] = sampleData.topStoriesCache;

  jobNewsItems: NewsItemModel[] = sampleData.topStoriesCache;

  /*                  BEGIN NEWS ITEMS                      */

  getNewsItem(id: number): NewsItemModel | undefined {
    return this.newsItemsCache.get(id.toString());
  }

  setNewsItem(id: number, newsItem: NewsItemModel): boolean {
    //@ts-ignore
    return this.newsItemsCache.set(id.toString(), newsItem);
  }

  /*                  END NEWS ITEMS                      */

  /*                   BEGIN USERS                        */

  getUser(id: string): UserModel | undefined {
    return this.userCache.get(id);
  }

  getUsers(): Array<{ key: string; value: UserModel }> {
    //@ts-ignore
    return this.userCache.dump();
  }

  setUser(id: string, user: UserModel): UserModel {
    logger('Cache set user:', user);

    this.userCache.set(id, user);

    return user;
  }

  /*                    END USERS                         */

  /*                   BEGIN COMMENTS                        */

  getComment(id: number): CommentModel | undefined {
    return this.commentCache.get(id.toString());
  }

  setComment(id: number, comment: CommentModel): CommentModel {
    this.commentCache.set(comment.id.toString(), comment);

    logger('Cache set comment:', comment);

    return comment;
  }

  /*                    END COMMENTS                         */

  /*                   BEGIN CACHES                         */

  newNewsItemsCache = new LRUCache<string, NewsItemModel>({
    max: 500,
    //@ts-ignore
    maxAge: 1000 * 60 * 60, // 60 Minute cache: ms * s * m
  });

  newsItemsCache = new LRUCache<string, NewsItemModel>({
    max: 1000,
    //@ts-ignore
    maxAge: 1000 * 60 * 60, // 60 Minute cache: ms * s * m
  });

  userCache = new LRUCache<string, UserModel>({
    max: 500,
    //@ts-ignore
    maxAge: 1000 * 60 * 60 * 2, // 2 hour cache: ms * s * m
  });

  commentCache = new LRUCache<string, CommentModel>({
    max: 5000,
    //@ts-ignore
    maxAge: 1000 * 60 * 60 * 1, // 1 hour cache: ms * s * m
  });

  /*                   END CACHES                         */
}
