import { IRepository, Repository } from '../../domain/entities/repository';

export class RepositoryImpl implements IRepository {
  private readonly GITHUB_TREND_BASE_URL: string;
  constructor(url: string | null) {
    if (!url) throw new Error('url is required');
    this.GITHUB_TREND_BASE_URL = url;
  }
  public fetchRepositories(language?: string): Repository[] {
    const postfix = language ? `?language=${language}` : '';
    const url = `${this.GITHUB_TREND_BASE_URL}/${postfix}`;
    const response = UrlFetchApp.fetch(url);
    const repositories: Repository[] = JSON.parse(response.getContentText());
    return repositories;
  }

  public insertRepositories(repositories: Repository[]): void {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getActiveSheet();
    let lastRow = sheet.getLastRow();

    repositories.forEach((repo: Repository) => {
      const repoName = `${repo.author}/${repo.name}`;
      sheet.getRange(lastRow + 1, 1, 1, 1).setValue(repoName);
      lastRow++;
    });
  }
}
