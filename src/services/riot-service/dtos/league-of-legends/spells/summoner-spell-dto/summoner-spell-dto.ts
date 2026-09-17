export class SummonerSpellDto {
  constructor(id: string, key: string, name: string, description: string, tooltip: string, maxRank: number, cooldown: number[], cooldownBurn: string, summonerLevel: number, image: SummonerSpellImageDto, resource: string) {
    this.id = id;
    this.key = key;
    this.name = name;
    this.description = description;
    this.tooltip = tooltip;
    this.maxRank = maxRank;
    this.cooldown = cooldown;
    this.cooldownBurn = cooldownBurn;
    this.summonerLevel = summonerLevel;
    this.image = image;
    this.resource = resource;
  }
  id: string;
  key: string;
  name: string;
  description: string;
  tooltip: string;
  maxRank: number;
  cooldown: number[];
  cooldownBurn: string;
  summonerLevel: number;
  image: SummonerSpellImageDto;
  resource: string;

  getImageUrl(version: string = "latest"): string {
    return `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${this.image.full}`;
  }
}

export class SummonerSpellImageDto {
  constructor(full: string, sprite: string, group: string, x: number, y: number, w: number, h: number) {
    this.full = full;
    this.sprite = sprite;
    this.group = group;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}
