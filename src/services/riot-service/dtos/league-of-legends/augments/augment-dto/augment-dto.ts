
export class AugmentDto {


  constructor(apiName: string, desc: string, iconLarge: string, iconSmall: string, id: number, name: string, rarity: number, tooltip: string, calculations: object, dataValues: object) {
    this.apiName = apiName;
    this.desc = desc;
    this.iconLarge = iconLarge;
    this.iconSmall = iconSmall;
    this.id = id;
    this.name = name;
    this.rarity = rarity;
    this.tooltip = tooltip;
    this.calculations = calculations;
    this.dataValues = dataValues;
  }

  apiName: string;
  desc: string;
  iconLarge: string;
  iconSmall: string;
  id: number
  name: string;
  rarity: number;
  tooltip: string;
  calculations: object;
  dataValues: object;


  getLargeImageUrl(version: string): string {
    return `https://raw.communitydragon.org/${version}/game/${this.iconLarge}`;
  }

  getSmallImageUrl(version: string): string {
    return `https://raw.communitydragon.org/${version}/game/${this.iconSmall}`;
  }
}


export class AugmentsDto {
  constructor(augments: AugmentDto[]) {
    this.augments = augments;
  }
  augments: AugmentDto[];
}
