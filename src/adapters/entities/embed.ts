import { Embed, IEmbed } from '../../domain/entities/embed';
import { Repository } from '../../domain/entities/repository';
import { translate } from '../translate';

export class EmbedDiscord implements IEmbed {
  private WEBHOOK_URL: string;
  constructor(url: string | null) {
    if (!url) throw new Error('url is required');
    this.WEBHOOK_URL = url;
  }
  public createEmbedsFromRepositories(repositories: Repository[]): Embed[] {
    return repositories.map(repo => ({
      title: `${repo.author}/${repo.name}`,
      url: repo.url,
      description: translate(repo.description),
      color: repo.languageColor
        ? parseInt(repo.languageColor.replace('#', ''), 16)
        : 0,
      fields: [
        {
          name: '言語',
          value: repo?.language || 'null',
          inline: true,
        },
        {
          name: 'スター数',
          value: repo.stars.toString(),
          inline: true,
        },
        {
          name: '瞬間スター風速',
          value: repo.currentPeriodStars.toString(),
          inline: true,
        },
        // {
        //   name: 'フォーク数',
        //   value: repo.forks.toString(),
        //   inline: true,
        // },
      ],
      author: {
        name: repo.author,
        url: `https://github.com/${repo.author}`,
        icon_url: repo.avatar,
      },
    }));
  }

  public sendToWebhook(embeds: Embed[]): void {
    const payload = {
      embeds,
    };

    const options = {
      method: 'post' as GoogleAppsScript.URL_Fetch.HttpMethod,
      headers: {
        'Content-Type': 'application/json',
      },
      payload: JSON.stringify(payload),
      muteHttpExceptions: true,
    };

    try {
      const response = UrlFetchApp.fetch(this.WEBHOOK_URL, options);
      Logger.log(response.getResponseCode());
      if (response.getResponseCode() !== 200) {
        throw new Error(response.getContentText()); // HTTPエラーの詳細を取得
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        Logger.log('エラーが発生しました: ' + error.toString());
        Logger.log('payload: ' + JSON.stringify(payload)); // payloadの内容をログに出力
      }
    }
  }
}
