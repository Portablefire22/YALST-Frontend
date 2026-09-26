export class RankDto {
  constructor(time: number, queueType: string, tier: string, rank: number, wins: number, losses: number, leaguePoints: number) {
    this.time = time;
    this.queueType = queueType;
    this.tier = tier;
    this.rank = rank;
    this.wins = wins;
    this.losses = losses;
    this.leaguePoints = leaguePoints;
  }
  time: number;
  queueType: string;
  tier: string;
  rank: number;
  wins: number;
  losses: number;
  leaguePoints: number;

  public static HighestRank(rank1: RankDto, rank2: RankDto): RankDto {
    const total1 = (this.TierToNumber(rank1.tier) * 400) + ((rank1.rank - 1) * 100) + rank1.leaguePoints;
    const total2 = (this.TierToNumber(rank2.tier) * 400) + ((rank2.rank - 1) * 100) + rank2.leaguePoints;
    return total1 >= total2? rank1 : rank2;
  }

  public static toRankedString(rank: RankDto): string {
    let result = rank.tier;
    if (rank.tier == "Master" || rank.tier == "Grandmaster" || rank.tier == "Challenger") {
      return result;
    }

    switch (rank.rank) {
      case 1:
        result += " I";
        break;
      case 2:
        result += " II";
        break;
      case 3:
        result += " III";
        break;
      case 4:
        result += " IV";
        break;
    }
    return result;
  }

  private static TierToNumber(tier: string) : number {
    switch (tier) {
      case "Iron":
        return 0;
      case "Bronze":
        return 1;
      case "Silver":
        return 2;
      case "Gold":
        return 3;
      case "Platinum":
        return 4;
      case "Emerald":
        return 5;
      case "Diamond":
        return 6;
      case "Master":
        return 7;
      case "Grandmaster":
        return 8;
      case "Challenger":
        return 9;
    }
    return -1;
  }
}
