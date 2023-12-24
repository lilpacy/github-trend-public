import { IEmbed } from '../../domain/entities/embed';
import { IRepository, Repository } from '../../domain/entities/repository';
import { INotify } from '../../domain/usecases/notify';
import { chunkArray } from '../../utils/array';
import { Language } from '../../domain/entities/language';

export class NotifyImpl extends INotify {
  private repository: IRepository;
  private embeds: IEmbed[];

  constructor(
    languages: Language[],
    repository: IRepository,
    embeds: IEmbed[]
  ) {
    super(languages);
    this.repository = repository;
    this.embeds = embeds;
  }

  override fetchRepositories(language?: string): Repository[] {
    return this.repository.fetchRepositories(language);
  }

  override checkDuplicateInArr(repositories: Repository[]): Repository[] {
    return repositories.filter((repo, index, self) => {
      const repoName = `${repo.author}/${repo.name}`;
      return (
        index === self.findIndex(t => `${t.author}/${t.name}` === repoName)
      );
    });
  }

  override checkDuplicateInDB(repositories: Repository[]): Repository[] {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getActiveSheet();
    const lastRow = sheet.getLastRow();
    const existingData =
      lastRow > 0 ? sheet.getRange(1, 1, lastRow, 1).getValues() : [];
    return repositories.filter((repo: Repository) => {
      const repoName = `${repo.author}/${repo.name}`;
      return !existingData.flat().includes(repoName);
    });
  }

  override notifyAndSave(repositories: Repository[]): string {
    if (repositories.length <= 0)
      return '新しいリポジトリが見つかりませんでした。';

    const chunkedRepositories = chunkArray(repositories, 10);
    chunkedRepositories.forEach(repoChunk => {
      this.embeds.forEach(embed => {
        const embeds = embed.createEmbedsFromRepositories(repoChunk);
        embed.sendToWebhook(embeds);
      });
      this.repository.insertRepositories(repoChunk);
    });
    return '新しいレポジトリを通知しました。';
  }
}
