export class MatchDto {

  dataVersion: string;
  gameVersion: string;
  matchId: string;
  participantCount: number;
  endOfGameResult: string;
  gameCreation: number;
  gameDuration: number;
  gameEndTimestamp: number;
  gameId: number;
  gameMode: string;
  gameName: string;
  gameStartTimestamp: number;
  gameType: string;
  platformId: string;
  queueId: string;
  tournamentCode: string | null;

  constructor(dataVersion: string, gameVersion: string, matchId: string, participantCount: number, endOfGameResult: string, gameCreation: number, gameDuration: number, gameEndTimestamp: number, gameId: number, gameMode: string, gameName: string, gameStartTimestamp: number, gameType: string, platformId: string, queueId: string, tournamentCode: string | null) {
    this.dataVersion = dataVersion;
    this.gameVersion = gameVersion;
    this.matchId = matchId;
    this.participantCount = participantCount;
    this.endOfGameResult = endOfGameResult;
    this.gameCreation = gameCreation;
    this.gameDuration = gameDuration;
    this.gameEndTimestamp = gameEndTimestamp;
    this.gameId = gameId;
    this.gameMode = gameMode;
    this.gameName = gameName;
    this.gameStartTimestamp = gameStartTimestamp;
    this.gameType = gameType;
    this.platformId = platformId;
    this.queueId = queueId;
    this.tournamentCode = tournamentCode;
  }
}
