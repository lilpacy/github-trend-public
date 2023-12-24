import { RepositoryImpl } from './adapters/entities/repository';
import { EmbedDiscord } from './adapters/entities/embed';
import { NotifyImpl } from './adapters/usecases/notify';
import { Language } from './domain/entities/language';
import { INotify } from './domain/usecases/notify';
import { IRepository } from './domain/entities/repository';
import { IEmbed } from './domain/entities/embed';

const GITHUB_TREND_BASE_URL =
  PropertiesService.getScriptProperties().getProperty('GITHUB_TREND_BASE_URL');
const DISCORD_WEBHOOK_URL = PropertiesService.getScriptProperties().getProperty(
  'DISCORD_WEBHOOK_URL'
);

function main(): string {
  const repository: IRepository = new RepositoryImpl(GITHUB_TREND_BASE_URL);
  const embeds: IEmbed[] = [new EmbedDiscord(DISCORD_WEBHOOK_URL)];
  const languages: Language[] = [undefined, 'solidity', 'typescript'];
  const notify: INotify = new NotifyImpl(languages, repository, embeds);
  return notify.run();
}

console.log(main());
