import { NotifyImpl } from '../src/adapters/usecases/notify';
import { Embed, IEmbed } from '../src/domain/entities/embed';
import { IRepository, Repository } from '../src/domain/entities/repository';
import { INotify } from '../src/domain/usecases/notify';

// モック化されたIRepositoryの実装
class MockRepository implements IRepository {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fetchRepositories(language?: string): Repository[] {
    return [
      {
        author: 'ton-community',
        name: 'tsc5',
        avatar: 'https://github.com/ton-community.png',
        url: 'https://github.com/ton-community/tsc5',
        description: '',
        language: 'TypeScript',
        languageColor: '#3178c6',
        stars: 28,
        forks: 7,
        currentPeriodStars: 2,
        builtBy: [
          {
            username: 'aSpite',
            href: 'https://github.com/aSpite',
            avatar: 'https://avatars.githubusercontent.com/u/45543119',
          },
          {
            username: 'markokhman',
            href: 'https://github.com/markokhman',
            avatar: 'https://avatars.githubusercontent.com/u/5987968',
          },
        ],
      },
      {
        author: 'baidu',
        name: 'amis',
        avatar: 'https://github.com/baidu.png',
        url: 'https://github.com/baidu/amis',
        description: '前端低代码框架，通过 JSON 配置就能生成各种页面。',
        language: 'TypeScript',
        languageColor: '#3178c6',
        stars: 15429,
        forks: 2242,
        currentPeriodStars: 4,
        builtBy: [
          {
            username: '2betop',
            href: 'https://github.com/2betop',
            avatar: 'https://avatars.githubusercontent.com/u/2698393',
          },
          {
            username: 'nwind',
            href: 'https://github.com/nwind',
            avatar: 'https://avatars.githubusercontent.com/u/6889',
          },
          {
            username: 'lurunze1226',
            href: 'https://github.com/lurunze1226',
            avatar: 'https://avatars.githubusercontent.com/u/36724300',
          },
          {
            username: 'RickCole21',
            href: 'https://github.com/RickCole21',
            avatar: 'https://avatars.githubusercontent.com/u/19327810',
          },
          {
            username: 'hsm-lv',
            href: 'https://github.com/hsm-lv',
            avatar: 'https://avatars.githubusercontent.com/u/80095014',
          },
        ],
      },
    ];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  insertRepositories(repositories: Repository[]): void {
    // 何もしない
  }
}

// モック化されたIEmbedの実装
class MockEmbed implements IEmbed {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createEmbedsFromRepositories(repositories: Repository[]): Embed[] {
    return [
      {
        title: 'davidfantasy/mybatis-plus-generator-ui',
        url: 'https://github.com/davidfantasy/mybatis-plus-generator-ui',
        description:
          'mybatis-plus-generator をカプセル化し、Web UI を通じて Spring Boot および mybatis-plus フレームワークと互換性のあるさまざまなビジネス コードを迅速に生成します',
        color: 11563545,
        fields: [
          { name: '言語', value: 'Java', inline: true },
          { name: 'スター数', value: '1497', inline: true },
          { name: '瞬間スター風速', value: '3', inline: true },
        ],
        author: {
          name: 'davidfantasy',
          url: 'https://github.com/davidfantasy',
          icon_url: 'https://github.com/davidfantasy.png',
        },
      },
      {
        title: 'infiniflow/infinity',
        url: 'https://github.com/infiniflow/infinity',
        description:
          'LLM アプリケーション用に構築された AI ネイティブのデータベースは、驚くほど高速なベクトル検索と全文検索を提供します。',
        color: 15944573,
        fields: [
          { name: '言語', value: 'C++', inline: true },
          { name: 'スター数', value: '373', inline: true },
          { name: '瞬間スター風速', value: '44', inline: true },
        ],
        author: {
          name: 'infiniflow',
          url: 'https://github.com/infiniflow',
          icon_url: 'https://github.com/infiniflow.png',
        },
      },
      {
        title: 'jemalloc/jemalloc',
        url: 'https://github.com/jemalloc/jemalloc',
        description: '',
        color: 5592405,
        fields: [
          { name: '言語', value: 'C', inline: true },
          { name: 'スター数', value: '8697', inline: true },
          { name: '瞬間スター風速', value: '5', inline: true },
        ],
        author: {
          name: 'jemalloc',
          url: 'https://github.com/jemalloc',
          icon_url: 'https://github.com/jemalloc.png',
        },
      },
      {
        title: 'JoeanAmier/XHS-Downloader',
        url: 'https://github.com/JoeanAmier/XHS-Downloader',
        description:
          '無料、軽量、オープンソース、AIOHTTP モジュールに基づく Xiaohongshu グラフィック/ビデオ収集ツール',
        color: 3502757,
        fields: [
          { name: '言語', value: 'Python', inline: true },
          { name: 'スター数', value: '1797', inline: true },
          { name: '瞬間スター風速', value: '113', inline: true },
        ],
        author: {
          name: 'JoeanAmier',
          url: 'https://github.com/JoeanAmier',
          icon_url: 'https://github.com/JoeanAmier.png',
        },
      },
      {
        title: 'cloudcommunity/Free-Certifications',
        url: 'https://github.com/cloudcommunity/Free-Certifications',
        description: '無料のコースと認定資格の厳選されたリスト。',
        color: 0,
        fields: [
          { name: '言語', value: 'null', inline: true },
          { name: 'スター数', value: '16166', inline: true },
          { name: '瞬間スター風速', value: '78', inline: true },
        ],
        author: {
          name: 'cloudcommunity',
          url: 'https://github.com/cloudcommunity',
          icon_url: 'https://github.com/cloudcommunity.png',
        },
      },
    ];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  sendToWebhook(embeds: Embed[]): void {
    // 何もしない
  }
}

describe('NotifyImpl', () => {
  let notify: INotify;
  let mockRepository: IRepository;
  let mockEmbed: IEmbed;

  beforeEach(() => {
    mockRepository = new MockRepository();
    mockEmbed = new MockEmbed();
    notify = new NotifyImpl([], mockRepository, [mockEmbed]);
  });

  it('should return expected result', async () => {
    // spreadsheetはdiできるようにしてないので返値をモック
    notify.checkDuplicateInDB = jest
      .fn()
      .mockReturnValue(mockRepository.fetchRepositories());

    const result = await notify.run();
    expect(result).toBe('新しいレポジトリを通知しました。');
  });
});
