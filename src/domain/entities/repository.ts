type BuiltBy = {
  username: string;
  href: string;
  avatar: string;
};

export type Repository = {
  author: string;
  name: string;
  avatar: string;
  url: string;
  description: string;
  language?: string;
  languageColor: string;
  stars: number;
  forks: number;
  currentPeriodStars: number;
  builtBy: BuiltBy[];
};

export interface IRepository {
  fetchRepositories(language?: string): Repository[];
  insertRepositories(repositories: Repository[]): void;
}
