import { Repository } from './repository';

export type Embed = {
  title: string;
  url: string;
  description: string;
  color: number;
  fields: {
    name: string;
    value: string;
    inline: boolean;
  }[];
  author: {
    name: string;
    url: string;
    icon_url: string;
  };
};

export interface IEmbed {
  createEmbedsFromRepositories(repositories: Repository[]): Embed[];
  sendToWebhook(embeds: Embed[]): void;
}
