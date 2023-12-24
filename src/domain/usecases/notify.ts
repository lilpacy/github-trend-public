import { Language } from '../entities/language';
import { Repository } from '../entities/repository';

export abstract class INotify {
  protected languages: Language[];
  constructor(languages: Language[]) {
    this.languages = languages;
  }
  public run(): string {
    // 言語を取得
    const languages = this.languages;
    // レポジトリ取得
    const repositories = languages
      .map(lang => this.fetchRepositories(lang))
      .flat();
    // 配列内部で重複チェック
    const uniqueRepositoriesInArr = this.checkDuplicateInArr(repositories);
    // シートと重複チェック
    const uniqueRepositoriesEverywhere = this.checkDuplicateInDB(
      uniqueRepositoriesInArr
    );
    // ユニークなものを通知し、通知成功したものをDBに保存
    return this.notifyAndSave(uniqueRepositoriesEverywhere);
  }
  abstract fetchRepositories(language?: string): Repository[];
  abstract checkDuplicateInArr(repositories: Repository[]): Repository[];
  abstract checkDuplicateInDB(repositories: Repository[]): Repository[];
  abstract notifyAndSave(repositories: Repository[]): string;
}
